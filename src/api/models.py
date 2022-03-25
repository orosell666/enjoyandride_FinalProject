from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__= 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    name = db.Column(db.String(80), nullable=False)
    lastName = db.Column(db.String(120), unique=True, nullable=False)
    phonenumber = db.Column(db.String(120), unique=True, nullable=False) 

    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Moto(db.Model):
    __tablename__= 'moto'
    id = db.Column(db.Integer, primary_key=True)
    #modelo1 = db.Column(db.String(120), nullable=False)
    power = db.Column(db.Integer, nullable=False)
    brand = db.Column(db.String(120), nullable=False)
   # tipo1 = db.Column(db.String(120), nullable=False)
    priceday = db.Column(db.Integer, nullable=False)
    priceweek = db.Column(db.Integer, nullable=False)
    discount1 = db.Column(db.Integer, nullable=False)
    discount2 = db.Column(db.Integer, nullable=False)
    comment = db.Column(db.String(300), nullable=False)
    provincia = db.Column(db.String(300), nullable=False)
    ciudad = db.Column(db.String(300), nullable=False)
    direccion = db.Column(db.String(300), nullable=False)
    latitud = db.Column(db.Integer, primary_key=True)
    longitud = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, primary_key=True)
    
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),
        nullable=False) 
    user = db.relationship('User', backref='user', lazy=True)

    def __repr__(self):
        return '<Moto %r>' % self.id


class Modelo(db.Model):
    __tablename__= 'modelo'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    
    
    def __repr__(self):
        return '<Modelo %r>' % self.id

class Tipo(db.Model):
    __tablename__= 'tipo'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), primary_key=True)


    def __repr__(self):
        return '<Tipo %r>' % self.id

class Marca(db.Model):
    __tablename__= 'marca'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), primary_key=True)

    

    def __repr__(self):
        return '<Marca %r>' % self.id
