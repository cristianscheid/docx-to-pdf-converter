import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
STORAGE_FOLDER = os.path.join(BASE_DIR, "storage")
INPUT_FOLDER = os.path.join(STORAGE_FOLDER, "input_files")
OUTPUT_FOLDER = os.path.join(STORAGE_FOLDER, "output_files")

os.makedirs(INPUT_FOLDER, exist_ok=True)
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

API_HOST = "0.0.0.0"
API_PORT = 8080
