from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    name = db.Column(db.String(80), nullable=False)
    lastName = db.Column(db.String(120), nullable=False)
    phonenumber = db.Column(db.String(120), unique=False, nullable=False)
    license = db.Column(db.String(120), unique=False, nullable=False)
    adress = db.Column(db.String(120), nullable=False)
    birthdate = db.Column(db.DateTime, nullable=False)

    def __repr__(self):
        return  self.email

    def serialize(self):
        return {
            "user_id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Moto(db.Model):
   
    id = db.Column(db.Integer, primary_key=True)
    power = db.Column(db.Integer, nullable=False)
    priceday = db.Column(db.Integer, nullable=False)
    priceweek = db.Column(db.Integer, nullable=False)
    discount_weekend = db.Column(db.Integer, nullable=True)
    discount_week = db.Column(db.Integer, nullable=True)
    comment = db.Column(db.String(300), nullable=True)
    provincia = db.Column(db.String(300), nullable=False)
    ciudad = db.Column(db.String(300), nullable=False)
    
    latitud = db.Column(db.String, nullable=True)
    longitud = db.Column(db.String, nullable=True)
    matricula = db.Column(db.String, nullable=False)

    
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),
        nullable=False) 
    user = db.relationship('User', backref='user', lazy=True, cascade = "all,delete")

    modelo_id = db.Column(db.Integer, db.ForeignKey('modelo.id'),
        nullable=False) 
    modelo = db.relationship('Modelo', backref='modelo', lazy=True, cascade = "all,delete")

    tipo_id = db.Column(db.Integer, db.ForeignKey('tipo.id'),
        nullable=False) 
    tipo = db.relationship('Tipo', backref='tipo', lazy=True, cascade = "all,delete")



    def __repr__(self):
        return '<Moto %r>' % self.id


class Modelo(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    marca_id = db.Column(db.Integer, db.ForeignKey('marca.id'),
       nullable=False)
    
    def __repr__(self):
        return  self.name

    def serialize(self):
        return {
            "modelo_id": self.id,
            "name": self.name,
        }

class Tipo(db.Model):
   
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False )


    def __repr__(self):
        return self.name
        
    def serialize(self):
        return {
            "modelo_id": self.id,
            "name": self.name,
        }

class Marca(db.Model):
   
    id = db.Column(db.Integer, primary_key=True, nullable=False )
    name = db.Column(db.String(120), nullable=False)
    modelo = db.relationship('Modelo', backref='marca', lazy=True, cascade = "all,delete")

    

    def __repr__(self):
        return self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            # do not serialize the password, its a security breach
        }
