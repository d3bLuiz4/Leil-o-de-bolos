from flask import Flask, render_template, request, redirect, url_for    
from datetime import datetime, timedelta

#flask --app app run
#^ Roda o código

#pip install --proxy http://proxy.spo.ifsp.edu.br:3128 flask
#^ Baixa Flask no pc da escola
app = Flask(__name__)
    


auction_end_time = datetime.now() + timedelta(hours=2, minutes=50, seconds=30)

@app.route('/')
def listar_usuarios():
    # Passa a hora final do leilão para o template (em timestamp JS)
    return render_template('index.html', auction_end=auction_end_time.timestamp())



if __name__=='__main__':
    app.run(debug=True) 