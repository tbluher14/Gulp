from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField, SelectField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import Business

# def name_length_check(form, field):
#     if len(field.data) < 1 or len(field.data) > 50:
#         raise ValidationError('Business Name must be between 1 and 50 characters long.')

# def address_length_check(form, field):
#     if len(field.data) < 1 or len(field.data) > 100:
#         raise ValidationError('Address must be betweeen 1 and 100 characters long.')

# def city_length_check(form, field):
#     if len(field.data) < 1 or len(field.data) > 50:
#         raise ValidationError('City must be between 1 and 50 characters long.')

# def state_length_check(form, field):
#     if len(field.data) < 1 or len(field.data) > 50:
#         raise ValidationError('State must be between 1 and 50 characters long.')

# def country_length_check(form, field):
#     if len(field.data) < 1 or len(field.data) > 50:
#         raise ValidationError('Country must be between 1 and 50 characters long.')

# def zipCode_length_check(form, field):
#     if len(field.data) < 5 or len(field.data) > 5:
#         raise ValidationError('Please enter a valid Zip Code')

# def website_length_check(form, field):
#     if len(field.data) < 1 or len(field.data) > 500:
#         raise ValidationError('Website must be between 1 and 500 characters long.')

# def phone_length_check(form, field):
#     if len(field.data) < 10 or len(field.data)>10:
#         raise ValidationError('Phone enter a valid phone number.')

# def description_length_check(form, field):
#     if len(field.data) < 1 or len(field.data) > 2000:
#         raise ValidationError('Description must be between 1 and 2000 characters long.')

# def check_image(form, field):
#     if not field.data.startswith("https"):
#         raise ValidationError("Please enter a valid image url")

class CreateBusinessForm(FlaskForm):

    owner_id = IntegerField('owner_id', validators=[DataRequired()])
    name = StringField('Name', validators=[DataRequired()])
    address = StringField('Address', validators=[DataRequired()])
    city = StringField('City', validators=[DataRequired()])
    state = StringField('State', validators=[DataRequired()])
    country = StringField('Country', validators=[DataRequired()])
    zipCode = StringField('Zip Code', validators=[DataRequired()])
    website = StringField('Website', validators=[DataRequired()])
    phone = StringField('Phone Number', validators=[DataRequired()])
    description = StringField('Description', validators=[DataRequired()])
    open = StringField("Open", validators=[DataRequired()])
    close = StringField("Close", validators=[DataRequired()])
    am_pm_open = StringField("ampmOpen", validators=[DataRequired()])
    am_pm_close = StringField("ampmClose", validators=[DataRequired()])
    image = StringField('Image', validators=[DataRequired()])
    submit = SubmitField("Submit")
