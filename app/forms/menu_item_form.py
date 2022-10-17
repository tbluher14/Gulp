from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField
from wtforms.validators import DataRequired, ValidationError, Length, NumberRange


class CreateMenuItemForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired(), Length(min=1, max=255)])
    price = IntegerField('Price', validators=[DataRequired()])
    image_url = StringField('Image URL', validators=[DataRequired(), Length(min=1)])
    business_id = IntegerField('business_id', validators=[DataRequired()])
    submit = SubmitField("Submit")
