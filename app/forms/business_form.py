from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User

class CreateBusinessForm(FlaskForm):
    # owner_id = IntegerField('owner_id', validators=[DataRequired()])
    # name = StringField('Name', validators=[DataRequired(), Length(min=2, max=50)])
    # address = StringField('Address', validators=[DataRequired(), Length(min=2, max=50)])
    # city = StringField('City', validators=[DataRequired(), Length(min=2, max=50)])
    # state = StringField('State', validators=[DataRequired(), Length(min=2, max=50)])
    # country = StringField('Country', validators=[DataRequired(), Length(min=2, max=50)])
    # zipCode = StringField('Zip Code', validators=[DataRequired(), Length(5)])
    # website = StringField('Website', validators=[DataRequired(), Length(min=2)])
    # phone = StringField('Phone Number', validators=[DataRequired(), Length(10)])
    # description = StringField('Description', validators=[DataRequired(), Length(min=2)])
    # # image = StringField('Image', validators=[DataRequired()])
    # submit = SubmitField("Submit")

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
