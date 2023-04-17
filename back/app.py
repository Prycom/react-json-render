import json
import os
from flask import Flask, Response, jsonify, render_template, request, url_for, redirect
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData, create_engine, inspect

from sqlalchemy.sql import func


basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
cors = CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] =\
        'sqlite:///' + os.path.join(basedir, 'database.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(100), nullable=False)
    lastname = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(80), unique=True, nullable=False)
    age = db.Column(db.Integer)
    created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())
    bio = db.Column(db.Text)

    def __repr__(self):
        return f'<Student {self.firstname}>'

class Test(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(100), nullable=False)
    

    def __repr__(self):
        return f'<Test {self.firstname}>'   

@app.route('/get_catalogs')
@cross_origin()
def get_catalogs():
    res = []
    engine = db.get_engine()
    inspector = inspect(engine)
    schemas = inspector.get_schema_names()
    for schema in schemas:
        for table_name in inspector.get_table_names(schema=schema):
            print(table_name)
            res.append(table_name)

    resp = Response(
        response=json.dumps(res, default=str),
        status=200
    )
    return resp
    

models_dict = {
    'student' : Student,
    'test' : Test
}

@app.route('/')
@cross_origin()
def index():
    catalog_name = request.args.get('catalog')
    print(f' args string: {catalog_name}')
    catalog = models_dict[catalog_name] .query.all()
    print(catalog)

    res = []
    for data in catalog:
        data_dict = data.__dict__
        del data_dict['_sa_instance_state']
        res.append(data_dict)
    print(res)    
    resp = Response(
        response=json.dumps(res, default=str),
        status=200
    )
    return resp


@app.route('/select')
@cross_origin()
def select():
    resp = Response(
        response=json.dumps(['Man', "Woman"], default=str),
        status=200
    )
    return resp


@cross_origin()
@app.route('/testProps')
def testProps():
    f = open('files.json')
    data = json.load(f)
    resp = Response(
        response=json.dumps(data['testProps'], default=str),
        status=200,
    )
    return resp