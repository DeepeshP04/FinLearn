from flask import Blueprint, render_template

views = Blueprint("views", __name__)

@views.route("/")
def index():
    return render_template("home.html")

@views.route("/savings")
def get_savings_tips():
    return render_template("savings.html")

@views.route("/investment")
def get_investment():
    return render_template("investment.html")