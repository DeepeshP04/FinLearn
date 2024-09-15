# Seperate file for server
# not needed

from FinLearn import create_app

app = create_app()
    
if __name__ == "__main__":
    app.run(debug=True)