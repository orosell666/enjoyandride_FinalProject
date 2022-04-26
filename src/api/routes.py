"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Moto, Marca, Modelo, Tipo
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from datetime import datetime
import cloudinary
import cloudinary.uploader
import json



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
        "color": "success",
        "telefono": user.phonenumber,
        "nombre": user.name,
        "apellidos": user.lastName,
        "direccion": user.adress,
        "birthdate": user.birthdate,
        "license": user.license
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

    
    print(request.files.get('file'))
    
    user_id = get_jwt_identity()
    data = request.form

    power = data.get('power')
    priceday = data.get('priceday')
    priceweek = data.get('priceweek')
    discount_weekend = data.get('discount_weekend')
    discount_week = data.get('discount_week')
    comment = data.get('comment')
    provincia = data.get('provincia')
    ciudad = data.get('ciudad')
    result = cloudinary.uploader.upload(request.files['file'])
    image_url = result['secure_url']
    email = data.get('email')
    telefono = data.get('telefono')
    matricula = data.get('matricula')
    modelo_id = data.get('modelo_id')
    tipo_id = data.get('tipo_id')

    moto = Moto(power= power, priceday= priceday, priceweek= priceweek, discount_weekend= discount_weekend, discount_week= discount_week, comment= comment, provincia= provincia, 
    ciudad= ciudad, email= email, telefono= telefono,  modelo_id= modelo_id, tipo_id= tipo_id, user_id= user_id, matricula= matricula, image_url= image_url)
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
        "email": moto.email,
        "telefono": moto.telefono,
        "imagen": moto.image_url,
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







#ESTE ENDOINT SIRVE PARA....
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

@api.route('/upload', methods=['POST'])
def handle_upload():

    moto1 = Moto.query.get(1)
    result = cloudinary.uploader.upload(request.files ['image'])
    print(result['secure_url'])

    moto.image_url = result['secure_url']

    db.session.commit()

    return jsonify("all good"), 200


#ESTE ENDPOINT ME DEVUELVE TODAS LAS MOTOS EN EL COMPONENTE MotoCArd
@api.route('/recuperaMotos', methods=['GET'])
def recuperaMotos():
    
    motos = Moto.query.all()
     
    all_motos = list(map(lambda x: x.serialize(), motos))

    return jsonify(all_motos), 200



@api.route('/recuperaMotos/<int:user_id>', methods=['GET'])
def recuperaMotosUser(user_id):
    
    motos = Moto.query.filter_by(user_id = user_id).all()
     
    all_motos = list(map(lambda x: x.serialize(), motos))

    return jsonify(all_motos), 200