function IOR(w, d, D) {
	//w is the thickness of the glass in (mm)
	//d is the distance of light source from reference light in (mm)
	//D is the distance of light source from the glass prism in (mm)
	let h, W, theta, phi,n;
	h = Math.sqrt(Math.pow(d,2) + Math.pow(D,2));
	W = Math.sqrt(D - d)
	W = (W<0)? -(W/2) : W/2;
	H = Math.sqrt(Math.pow(W,2) + Math.pow(w,2));
	theta = Math.sin(h);
	phi = Math.sin(H);
	n = (theta / phi)
	return [n, theta, phi];
}

console.log(IOR(5,3,7));