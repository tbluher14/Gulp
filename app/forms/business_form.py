from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import Business

def name_length_check(form, field):
    if len(field.data) < 1 or len(field.data) > 50:
        raise ValidationError('Name must be between 1 and 50 characters long.')

def address_length_check(form, field):
    if len(field.data) < 1 or len(field.data) > 100:
        raise ValidationError('Address must be betweeen 1 and 100 characters long.')

def city_length_check(form, field):
    if len(field.data) < 1 or len(field.data) > 50:
        raise ValidationError('City must be between 1 and 50 characters long.')

def state_length_check(form, field):
    if len(field.data) < 1 or len(field.data) > 50:
        raise ValidationError('State must be between 1 and 50 characters long.')

def country_length_check(form, field):
    if len(field.data) < 1 or len(field.data) > 50:
        raise ValidationError('Country must be between 1 and 50 characters long.')

def zipCode_length_check(form, field):
    if len(field.data) < 1 or len(field.data) > 5:
        raise ValidationError('Zip Code must be between 1 and 5 characters long.')

def website_length_check(form, field):
    if len(field.data) < 1 or len(field.data) > 500:
        raise ValidationError('Website must be between 1 and 500 characters long.')

def phone_length_check(form, field):
    if len(field.data) < 1 or len(field.data) > 10:
        raise ValidationError('Phone must be between 1 and 10 characters long.')

def description_length_check(form, field):
    if len(field.data) < 1 or len(field.data) > 2000:
        raise ValidationError('Description must be between 1 and 2000 characters long.')


class CreateBusinessForm(FlaskForm):

    owner_id = IntegerField('owner_id', validators=[DataRequired()])
    name = StringField('Name', validators=[DataRequired(), name_length_check])
    address = StringField('Address', validators=[DataRequired(), address_length_check])
    city = StringField('City', validators=[DataRequired(), city_length_check])
    state = StringField('State', validators=[DataRequired(), state_length_check])
    country = StringField('Country', validators=[DataRequired(), country_length_check])
    zipCode = StringField('Zip Code', validators=[DataRequired(), zipCode_length_check])
    website = StringField('Website', validators=[DataRequired(), website_length_check])
    phone = StringField('Phone Number', validators=[DataRequired(), phone_length_check])
    description = StringField('Description', validators=[DataRequired(), description_length_check])
    # image = StringField('Image', validators=[DataRequired()])
    submit = SubmitField("Submit")
