import subprocess


def convert_docx_to_pdf(input_path, output_folder):
    subprocess.run([
        "libreoffice", "--headless", "--convert-to", "pdf",
        input_path, "--outdir", output_folder
    ], check=True)
