from flask import Blueprint, request, jsonify, send_file
import os
import uuid
from config import INPUT_FOLDER, OUTPUT_FOLDER
from services.converter import convert_docx_to_pdf
import subprocess

bp = Blueprint('convert', __name__, url_prefix='/api')


@bp.route("/convert-file", methods=["POST"])
def convert_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "Empty filename"}), 400

    unique_name = f"{uuid.uuid4()}.docx"
    input_path = os.path.join(INPUT_FOLDER, unique_name)
    file.save(input_path)

    try:
        convert_docx_to_pdf(input_path, OUTPUT_FOLDER)

        output_pdf = unique_name.replace('.docx', '.pdf')
        output_path = os.path.join(OUTPUT_FOLDER, output_pdf)

        return send_file(output_path, as_attachment=True, download_name="converted.pdf")

    except subprocess.CalledProcessError:
        return jsonify({"error": "Conversion failed"}), 500
