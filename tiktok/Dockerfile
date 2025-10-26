# Use an official Python runtime as a parent image
FROM python:3.10-slim

# Set the working directory in the container
WORKDIR /app

# Install system dependencies, including ffmpeg
RUN apt-get update && apt-get install -y ffmpeg

# Copy the requirements file into the container
COPY requirements.txt .

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of your application code
COPY . .

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Define the command to run your app using gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "app:app"]
