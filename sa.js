var videos = [
'1G_jBH1aiYSrqwTM03l5vb2n1rWsaPZhX',
'1G9WcP2VUevr7ud8ec6ZAKofmq6qaUNIy',
'1G9WcP2VUevr7ud8ec6ZAKofmq6qaUNIy'
];

var index=Math.floor(Math.random() * videos.length);
var html='<iframe height="250" src="https://drive.google.com/file/d/' + videos[index] + '/preview" allowfullscreen></iframe>';

document.write(html);
