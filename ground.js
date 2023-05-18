//  Crie a classe para Ground:

class Ground 
{
  
  constructor() 
  {
//     Adicione as opções de parâmetro adicionais em Bodies.rectangle(). Esses
// serão usados para ajustar o mecanismo de física:
    let options = {
      // isStatic: true
    };
    
    //  Defina valores para um objeto usando um construtor.
    this.body = Bodies.rectangle( options);
    this.w = 
    this.h = 
    World.add(world, this.body);
  }
  // Crie uma função para exibir o solo na tela
  show() {
    var pos = this.body.position;
    

    push();
    rectMode(CENTER);
    stroke(255);
    fill(127);

    // Adicione o ângulo e a função translate
   

   rect(0, 0, this.w, this.h);

  ///  rect(pos.x, pos.y, this.w, this.h);
    pop();
    angle +=0.1;

  }
  
}
