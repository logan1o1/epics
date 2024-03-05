import jwt from "jsonwebtoken";

const generateTokenNsetCookies = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
		expiresIn: "30d",
	})

    res.cookie("access_token", token, {
		maxAge: 30 * 24 * 60 * 60 * 1000, // MS
		httpOnly: true, // prevent XSS attacks cross-site scripting attacks
	});
}

export default generateTokenNsetCookies;