from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField
from wtforms.validators import DataRequired, ValidationError, Length, NumberRange


def check_price(form, field):
    if field.data<.01:
        raise ValidationError("Please enter a valid price")

# def check_image(form, field):
#     if not field.data.startswith("https"):
#         raise ValidationError("Please enter a valid image url")

def check_name(form, field):
    if len(form.data)<1 or len(form.data)>255:
        raise ValidationError('Please enter a valid Menu Item Name between 1 and 255 characters long')

class CreateMenuItemForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired(), Length(min=1, max=255), check_name])
    price = IntegerField('Price', validators=[DataRequired(), check_price])
    image_url = StringField('Image URL', validators=[DataRequired(), Length(min=1)])
    business_id = IntegerField('business_id', validators=[DataRequired()])
    submit = SubmitField("Submit")
