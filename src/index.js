const NodeMediaServer = require('node-media-server') // this helps us to setup both https and rtmps 

const config= {
    //all of this is automatically done by node-media-server
    // btw the obc{open broadcaster software} and the server
    rtmp:{
        port: 1935, //this is the default port of obs, we can change also
        chunk_size:60000, // this defines the size of each chunk in the rtmp stream
        ping: 30,
        gop_cache : true,
        ping_timeout: 60,  
        // we actually get all of this by default in the installation details site.
    },
    http:{
        port : 8080,
        allow_origin:'*'
    }
}

const server = new NodeMediaServer(config ) // this constructor takes a config object 
// in which you define how our RTMP server should work
server.run( );
