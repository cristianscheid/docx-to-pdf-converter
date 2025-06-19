FROM ubuntu:24.04

WORKDIR /app

RUN apt-get update && \
    apt-get install -y libreoffice-core libreoffice-writer python3 python3-venv python3-pip

RUN python3 -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

COPY requirements.txt .
RUN pip install --upgrade pip  && \
    pip install -r requirements.txt

COPY . .

EXPOSE 8080

CMD ["python", "app.py"]
