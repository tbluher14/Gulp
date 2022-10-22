from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')

def check_user_length(form, field):
    if len(field.data)<2 or len(field.data)>50:
        raise ValidationError('User Name must be between 2 and 50 characters')

def check_email_length(form, field):
    if len(field.data)<2 or len(field.data)>50:
        raise ValidationError('Email must be between 2 and 50 characters')

def check_email(form, field):
    if "@" not in field.data:
        raise ValidationError('Email must be valid email address (ex: ex@gmail.com)')

def check_fname_length(form, field):
    if len(field.data)<2 or len(field.data)>50:
        raise ValidationError('First name must be between 2 and 50 characters')

def check_lname_length(form, field):
    if len(field.data)<2 or len(field.data)>50:
        raise ValidationError('Last name must be between 2 and 50 characters')

def check_password_length(form, field):
    if len(field.data)<6 or len(field.data)>50:
        raise ValidationError('Password must be between 6 and 50 characters')

def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


class SignUpForm(FlaskForm):
    username = StringField('username', validators=[DataRequired(), username_exists, check_user_length])
    email = StringField('email', validators=[DataRequired(), Email()])
    password = StringField('password', validators=[DataRequired(), check_password_length])
    first_name = StringField('first_name', validators=[DataRequired(), check_fname_length])
    last_name = StringField('last_name', validators=[DataRequired(), check_lname_length])
