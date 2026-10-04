from flask import Flask, render_template, request
app = Flask(__name__)
@app.route("/", methods=["GET", "POST"])
def registration():
    if request.method == "POST":
        name = request.form["name"]
        email = request.form["email"]
        phone = request.form["phone"]
        dob = request.form["dob"]
        gender = request.form["gender"]
        address = request.form["address"]
        city = request.form["city"]
        state = request.form["state"]
        pincode = request.form["pincode"]
        course = request.form["course"]
        branch = request.form["branch"]
        year = request.form["year"]
        roll_number = request.form["roll_number"]
        college = request.form["college"]
        guardian = request.form["guardian"]
        guardian_phone = request.form["guardian_phone"]

        return render_template(
            "success.html",
            name=name,
            email=email,
            phone=phone,
            dob=dob,
            gender=gender,
            address=address,
            city=city,
            state=state,
            pincode=pincode,
            course=course,
            branch=branch,
            year=year,
            roll_number=roll_number,
            college=college,
            guardian=guardian,
            guardian_phone=guardian_phone
        )
    return render_template("registration.html")
if __name__ == "__main__":
    app.run(debug=True)