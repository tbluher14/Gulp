from app.models import db, Review


# Adds a demo user, you can add other users here if you want
x = range(1, 34, 2)
y = range(2, 34, 2)

def seed_reviews():
  for n in x:
    review_one = Review(
      review='This place slaps! Definitely recommend the Deluxe Burger', rating=5, user_id=1, business_id=n)
    review_two = Review(
      review='Their IPAs were not up to par with my higher-than-average IPA tasting ability. The fries were danks though', rating=3, user_id=2, business_id=n)
    review_three = Review(
      review='I love coming here for happy hour. Great burgers, friendly staff, and a fun happy hour vibe. 10/10 would recommend', rating=5, user_id=3, business_id=n)

    db.session.add(review_one)
    db.session.add(review_two)
    db.session.add(review_three)
    db.session.commit()

  for n in y:
    review_four = Review(
      review="Its always fun dining here. Good burgers and they always have the game on. Back patio is great during the spring/summer and dog friendly.", rating=4, user_id=3, business_id=n)
    review_five = Review(
      review="I found this place in 2011 when I moved from Austin, and have been a regular ever since! Great atmosphere for Sunday Football, and I love that I can bring my doggo on the back patio.", rating=5, user_id=2, business_id=n)
    review_six = Review(
      review="Burgers were decent, but for the price, I probably would have gone elsewhere. Good tap selection and fries.", rating=3, user_id=1, business_id=n)

    db.session.add(review_four)
    db.session.add(review_five)
    db.session.add(review_six)
    db.session.commit()

def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
