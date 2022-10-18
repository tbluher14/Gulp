from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField
from wtforms.validators import DataRequired, ValidationError, Length, NumberRange

def check_rating(form, field):
    if field.data<1 or field.data>5:
        raise ValidationError("Please enter a valid rating between 1 and 5 stars")

def check_review(form, field):
    if len(field.data)<1 or len(field.data>255):
        raise ValidationError("Please enter a review between 1 and 255 characters")


class CreateReviewForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    business_id = IntegerField('business_id', validators=[DataRequired()])
    review = StringField('Review', validators=[DataRequired(), Length(min=1, max=255), check_review])
    rating = IntegerField('Rating', validators=[DataRequired(), NumberRange(min=1, max=5), check_rating])
    submit = SubmitField("Submit")
