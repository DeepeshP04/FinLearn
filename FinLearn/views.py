from flask import Blueprint, render_template
import os

views = Blueprint("views", __name__)

@views.route("/")
def index():
    """
    Render the homepage.
    """
    return render_template("home.html")

@views.route("/savings")
def savins_overview():
    """
    Render the savings overview page.
    """
    return render_template("savings.html")

@views.route("/savings/learn_by_reading")
def savings_learn_by_reading():
    """
    Render the 'Learn by Reading' section under Savings.
    """
    return render_template("savings-learn-by-reading.html")

@views.route("/savings/learn_by_games")
def savings_learn_by_games():
    """
    Render the 'Learn by Games' section under Savings.
    """
    return render_template("savings-learn-by-games.html")

@views.route("/savings/savings_strategy_simulator")
def savings_game_1():
    """
    Render the Savings Strategy Simulator game.
    """
    return render_template("savings-strategy-simulator.html")

@views.route("/investment")
def investment_overview():
    """
    Render the investment overview page.
    """
    return render_template("investment.html")

@views.route("/about")
def about():
    """
    Render the about page.
    """
    return render_template("about.html")

@views.route("/login")
def login():
    """
    Render the login page.
    """
    return render_template("login.html")