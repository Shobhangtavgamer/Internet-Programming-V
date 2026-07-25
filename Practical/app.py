from flask import Flask, render_template, request
import os
app = Flask(__name__)

UPLOAD_FOLDER = "static/uploads"
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/register", methods=["POST"])
def register():

    name = request.form.get("name")
    email = request.form.get("email")
    phone = request.form.get("phone")
    dob = request.form.get("dob")
    gender = request.form.get("gender")
    course = request.form.get("course")
    address = request.form.get("address")
    city = request.form.get("city")
    state = request.form.get("state")
    pincode = request.form.get("pincode")
    comments = request.form.get("comments")

    photo = request.files.get("photo")
    filename = ""

    if photo and photo.filename != "":
        filename = photo.filename
        photo.save(os.path.join(app.config["UPLOAD_FOLDER"], filename))
    return render_template(
        "success.html",
        name=name,
        email=email,
        phone=phone,
        dob=dob,
        gender=gender,
        course=course,
        address=address,
        city=city,
        state=state,
        pincode=pincode,
        comments=comments,
        filename=filename
    )

if __name__ == "__main__":
    app.run(debug=True)