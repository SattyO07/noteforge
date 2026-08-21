* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, sans-serif;
    background: #0b0b12;
    color: white;
    min-height: 100vh;
}

header {
    height: 70px;
    padding: 0 7%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #242431;
}

.logo {
    font-size: 21px;
    font-weight: bold;
}

nav {
    display: flex;
    gap: 25px;
}

nav a {
    color: #aaa;
    text-decoration: none;
}

nav a:hover {
    color: white;
}

main {
    width: 100%;
}

.hero {
    text-align: center;
    padding: 100px 20px 80px;
}

.tag {
    color: #9b7cff;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 3px;
    margin-bottom: 20px;
}

.hero h1 {
    font-size: clamp(45px, 8vw, 85px);
    line-height: 0.95;
    margin-bottom: 25px;
}

.hero h1 span {
    color: #9b7cff;
}

.description {
    max-width: 550px;
    margin: auto;
    color: #aaa;
    font-size: 18px;
    line-height: 1.6;
}

.start-button {
    display: inline-block;
    margin-top: 35px;
    padding: 15px 25px;
    background: #9b7cff;
    color: white;
    border-radius: 10px;
    text-decoration: none;
    font-weight: bold;
}

.converter {
    width: min(900px, 90%);
    margin: auto;
    padding: 40px;
    background: #12121c;
    border: 1px solid #272735;
    border-radius: 20px;
}

.converter-header {
    margin-bottom: 25px;
}

.converter-header h2 {
    margin-bottom: 8px;
}

.converter-header p {
    color: #888;
}

.upload-box {
    display: block;
    text-align: center;
    padding: 60px 20px;
    border: 2px dashed #3a3948;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.2s;
}

.upload-box:hover {
    border-color: #9b7cff;
    background: #171622;
}

.upload-icon {
    font-size: 45px;
    margin-bottom: 15px;
}

.upload-box h3 {
    margin-bottom: 8px;
}

.upload-box p {
    color: #999;
    margin-bottom: 10px;
}

.upload-box small {
    color: #666;
}

.upload-box input {
    display: none;
}

.file-info {
    margin-top: 20px;
    padding: 15px;
    background: #191923;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.file-info p {
    color: #777;
    margin-top: 5px;
}

.file-info button {
    border: 0;
    background: transparent;
    color: #aaa;
    font-size: 20px;
    cursor: pointer;
}

.analyze-button {
    width: 100%;
    margin-top: 20px;
    padding: 16px;
    border: 0;
    border-radius: 10px;
    background: #9b7cff;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
}

.analyze-button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
}

.result {
    margin-top: 35px;
}

.result h2 {
    margin-bottom: 20px;
}

.result-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
}

.result-card {
    border: 1px solid #30303d;
    background: #181821;
    color: white;
    padding: 25px;
    border-radius: 12px;
    cursor: pointer;
    text-align: left;
}

.result-card:hover {
    border-color: #9b7cff;
}

.result-card span {
    display: block;
    font-size: 30px;
    margin-bottom: 15px;
}

.result-card strong {
    display: block;
    margin-bottom: 5px;
}

.result-card small {
    color: #777;
}

.about {
    width: min(700px, 90%);
    margin: 100px auto;
    text-align: center;
}

.about h2 {
    margin-bottom: 15px;
}

.about p {
    color: #888;
    line-height: 1.7;
}

footer {
    padding: 30px;
    text-align: center;
    color: #555;
    border-top: 1px solid #20202a;
}

.hidden {
    display: none !important;
}

@media (max-width: 650px) {

    header {
        padding: 0 20px;
    }

    nav {
        display: none;
    }

    .hero {
        padding-top: 70px;
    }

    .converter {
        padding: 20px;
    }

    .result-grid {
        grid-template-columns: 1fr;
    }

}
