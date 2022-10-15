from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField
from wtforms.validators import DataRequired, ValidationError, Length, NumberRange
from app.models import User


class CreateReviewForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    business_id = IntegerField('business_id', validators=[DataRequired()])
    review = StringField('Review', validators=[DataRequired(), Length(min=1, max=255)])
    rating = IntegerField('Rating', validators=[DataRequired(), NumberRange(min=1, max=5)])
    submit = SubmitField("Submit")
