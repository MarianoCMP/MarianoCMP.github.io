import React from 'react';


 function AboutMe(){
    return (
        <div className="app">
          
            <h1>About Me</h1>
            <p>
        My name is Mariano. I'm currently a Senior in CUNY Lehman College.
        I live in the city that never sleeps called New York, I do sleep though.
        I'm Russian at heart (actually hispanic), I admire discipline. I grew to love
        technology after to be quite frank my modem constantly disconnecting.
        Even though that aspect is hardware, the story of how I came to be
        a Computer Science major I will link below it is quite dissapointing
        in a funny way. Being able to program is like
        controlling the whole universe (humans rely on technology)
        through such a small machine which is a computer.
        Technology is crazy.
            </p>
                <a
                className = "link"
                style = {{color: "white"}}
                href = "https://drive.google.com/file/d/1Jn3-Vb7R4jYfHFgjsxsTLc5S-el-Auc_/view"
                target = "_blank"
                
                >
                CHECK OUT MY RESUME!
                </a>
        </div>
      );

}

export default AboutMe;

