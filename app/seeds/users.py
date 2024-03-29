from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password', first_name='Tom', last_name='Bluher')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password', first_name='Matt', last_name='Fong')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password', first_name='Will', last_name='Marett')
    demo2 = User (
        username = "DemoLition", email="demolition@aa.io", password = 'password', first_name="Demo", last_name="User")


    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(demo2)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
