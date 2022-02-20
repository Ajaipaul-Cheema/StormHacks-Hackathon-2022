FROM python:3.8

ADD ./summorize_api/api.py /app
RUN make /app
RUN pip install -r requirements.txt
CMD python api.py