from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User

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
    # image = StringField('Image', validators=[DataRequired()])
    submit = SubmitField("Submit")
