"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Moto, Marca, Modelo, Tipo
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from datetime import datetime


api = Blueprint('api', __name__)

#esta funcion es la que me crea el token
@api.route('/token', methods=['POST'])
def login():
    email = request.json.get('email')
    password = request.json.get('password')
    print("@@@@@@@@@@@@@@@@@@ llega aqui")
    print(email)
    print(password)
    user = User.query.filter_by(email=email, password=password).first()
    if not user:
        return jsonify({"message":"El usuario no fue encontrado",
        "color": "danger"}), 402
    
    token = create_access_token(identity=user.id)

    data_response = {
        "status": True,
        "token": token,
        "email": user.email,
        "userID": user.id,
        "message": "conseguido!",
        "color": "success"
    }
    return jsonify(data_response), 200


@api.route('/registroUsuarios', methods=['POST'])
def registro():
    email = request.json.get('email')
    password = request.json.get('password')
    name = request.json.get('name')
    lastName = request.json.get('lastName')
    phonenumber = request.json.get('phonenumber')
    license = request.json.get('license')
    adress = request.json.get('adress')
    birthdate = request.json.get('birthdate')
    print(request.json)
    birthdate = datetime.strptime(birthdate, '%d/%m/%Y') #la fecha hay que escribirla asi: ida/mes/año 2/5/2025


    user = User(email= email , password= password, name= name, lastName= lastName, phonenumber= phonenumber, license= license, adress= adress, birthdate= birthdate, is_active= True)
    db.session.add(user)
    db.session.commit()

    data_response= {
        "email": user.email,
        "password": user.password,
        "name": user.name,
        "lastName": user.lastName,
        "phonenumber": user.phonenumber,
        "license": user.license,
        "adress": user.adress,
        "birthdate": user.birthdate
    }
    return jsonify(data_response), 200

@api.route('/registroMoto', methods=['POST'])
@jwt_required()
def registroMoto():

    user_id = get_jwt_identity()    

    power = request.json.get('power')
    priceday = request.json.get('priceday')
    priceweek = request.json.get('priceweek')
    discount_weekend = request.json.get('discount_weekend')
    discount_week = request.json.get('discount_week')
    comment = request.json.get('comment')
    provincia = request.json.get('provincia')
    ciudad = request.json.get('ciudad')
    
    latitud = request.json.get('latitud')
    longitud = request.json.get('longitud')
    matricula = request.json.get('matricula')
    modelo_id = request.json.get('modelo_id')
    tipo_id = request.json.get('tipo_id')

    moto = Moto(power= power, priceday= priceday, priceweek= priceweek, discount_weekend= discount_weekend, discount_week= discount_week, comment= comment, provincia= provincia, 
    ciudad= ciudad, latitud= latitud, longitud= longitud,  modelo_id= modelo_id, tipo_id= tipo_id, user_id= user_id, matricula= matricula)
    db.session.add(moto)
    db.session.commit()

    data_response= {
        "power": moto.power,
        "priceday": moto.priceday,
        "priceweek": moto.priceweek,
        "discount_weekend": moto.discount_weekend,
        "disocunt_week": moto.discount_week,
        "comment": moto.comment,
        "provincia": moto.provincia,
        "ciudad": moto.ciudad,
        "latitud": moto.latitud,
        "longitud": moto.longitud
    }
    return jsonify(data_response), 200


@api.route('/marca', methods=['POST'])
def loadMarca():
    name = request.json.get('name')

    marca = Marca(name= name)
    db.session.add(marca)
    db.session.commit()

    data_response= {
        "name": marca.name
    }
    return jsonify(data_response), 200

@api.route('/marca', methods=['GET'])
def getMarca():
    
    marcas = Marca.query.all()
    listadoMarcas = []
    for marca in marcas:
        listadoMarcas.append(marca.serialize()) 

    return jsonify(listadoMarcas), 200

@api.route('/modelo', methods=['POST'])
def loadModelo():
    name = request.json.get('name')

    modelos = Modelo(name= name)
    db.session.add(modelo)
    db.session.commit()

    data_response= {
        "name": modelo.name
    }
    return jsonify(data_response), 200

@api.route('/modelo', methods=['GET'])
def getModelo():
    
    modelos = Modelo.query.all()
    listadoModelos = []
    for modelo in modelos:
        listadoModelos.append(modelo.serialize()) 

    return jsonify(listadoModelos), 200

@api.route('/tipo', methods=['POST'])
def loadTipos():
    name = request.json.get('name')

    tipos = Tipo(name= name)
    db.session.add(tipo)
    db.session.commit()

    data_response= {
        "name": tipo.name
    }
    return jsonify(data_response), 200

@api.route('/tipo', methods=['GET'])
def getTipo():
    
    tipos = Tipo.query.all()
    listadoTipos = []
    for tipo in tipos:
        listadoTipos.append(tipo.serialize()) 

    return jsonify(listadoTipos), 200

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200