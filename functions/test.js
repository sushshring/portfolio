const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
     service: "Gmail",
     auth: {
        type: "OAuth2",
        project_id: "portfolio-c7478",
        private_key_id: "8bb722085d917e685730567ad6aa43a45ae94e64",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDD8pV43DKjoVa9\nDS7KcJxoUcw2eHBMr55JmyjWLeZrJZhu/DXqFa314iF87zJaX2kxdcqF06nt75Av\nilS7swQHgI9jaiTaVAJQH22QJ3HdP0mGR9jsqICBz5E2j5g+Hlk6D8CLGuSVBb+G\nqxRqMLDxbJzps1h6XXv9mfPgneVq2Ng0DaRYIWTiwf7SGZcgZN8A1Gb1lLiPun3r\n0CTa45J8Tg8w1sy3WWl/wVl5qjbtPJYNZ8Ha6xnZ1B3X7ukaO2bpezNFGvsGMM1H\nZAoUp4hUn0j3YS53WpWMp2FpBtJ4ut74AT3Uz18apxIEWmDAcf1QFFjcYj56zTCj\ntlVFhxAhAgMBAAECggEAHpW/UgGg39yfktu7aXrhVwEpjHkJIlcpMFkJK0E33ZKd\nM/mnGrYulJoq2vrlE6kf3MoDhhcPR6Xkjh8b8b5UCy28c+qN/Qwu3j3BlsYpZjzq\nJ40QZYQ5psl045zPSSboi4EI702Pz1j517XddmPKQqzO40WMsnDkGSYOJInQ1Pfk\nskjlq79cTKzbz4jT7l5d0/DIfZpdKxIx8hAATcBO5j4B9HjNsaKPri9xSXuHu1CS\ni6nr1MiFL+rD+JnP7sCdaFOjs6MLlid+nQT6Ya30uS77/49gW9kjzdmmPCwpJvUi\nlvfNKTvPfuKqGd3MlzKz6k+R1T2Evw/hl7RSIaK+FwKBgQD121I6b+YxhSnuRBkK\n7FYXlua99d44jlTXpPDc0ERPwVqZQ0m1iGi1F7oFiX71acT3DLiuS2e1dYqyQUh/\nm62LtJ+FSO/KRKEIoqJnI425NnTcWKztbEj6mqxA2ozfuaDnLAbBIuP8pMEwpMOd\np1ESHRX3qZMfPbL4w0kGP64Z9wKBgQDMCCJ1PXr6NMK72HM0HuDqHd9ife72sPfP\nvOg01yqjJyOnt41C96CNWP9lO5afhrzu5CSY15dDZaB5jl85yzgTqnPY8npEFVul\nP6AaxfK4rchk7GZASW7I1H1Ik7jKw9lgI4IpFVjdu2cZx8xbCqGiqXcsyXeewUJ+\nQlrEzqTgpwKBgDNJH/sOsp8r3xZT4EF2EXN0SAfiTQvRLQOa5Z+6VjWo6ORFtA+J\nOAZmv6g+CVzaRnsejTvWgPjKXzdWBPCRof8dm5UrJNI1xL3PZz9KnFrBcFkyqkgQ\nqZyVPU9+B5r31wfCGFqbk6F1INOr2x58851qsdVq60S+EyJvYkFKcV/7AoGAfEu0\nWkITChxcSb2KKUVqdZWvQbxAeM7EmSyXNaGjGvO8F++NQi/DAnkmVZCgqRyXOt2H\nogks4GUoBwWB45520hw0KQVHEPUF+LyzF7xhqrpL65fMjvttXzF8BVvg5r27ToMz\nRz32/lWtcJo0V345i/O7Y3B0zCUmEe7whxbwgN8CgYAwursurVgbu0Oyhkym69a7\n0cSxfZ5B/W2lT/gTmW3qzDdgUbFfTea7643u+23Xmg0MKzdRR78McLkjg7KU3ZJ3\nawBEGEagbTfTXww5tDtiKNISg9v2SPARuLkICoV1fyMaLcT/U4GFlzd784DTLLDY\nm5Aa7WCS8gwNVb1ogVSt4w==\n-----END PRIVATE KEY-----\n",
        client_email: "portfolio-c7478@appspot.gserviceaccount.com",
        client_id: "117097852163980013028",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://accounts.google.com/o/oauth2/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/portfolio-c7478%40appspot.gserviceaccount.com"
     }
});

transporter.verify((err, succ) => {
    console.log(err);
    console.log(succ);
    let mailOptions = {
    from: '"sushshring.me" <foo@blurdybloop.com>', // sender address
    to: 'sush.shring@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
    };
    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});

});

