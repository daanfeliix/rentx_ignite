**RF -> Requisitos funcionais**

- Estão ligados à toda funcionalidade que o sistema poderá ter, ex.:
    - Usuário pode cadastrar uma categoria
    - Usuário pode recuperar uma senha

**RNF -> Requisitos não funcionais**

- Estão ligadas à ferramentas utilizadas no sistema.
    - Bibliotecas.
    - Banco de dados. 

**RN -> Regras de negocio**

- Regras do funcionamento do sistema.

---
# Cadastro de carro

### **RF -> Requisitos funcionais**
- Deve ser possivel cadastrar um novo carro.
- Deve ser possive listar todas as categorias.
  

### **RN -> Regras de negocio**
- Não deve ser cadastrar dois carros com a mesma placa
- Não deve ser alterar a placa de um carro para a mesma de um carro já cadastrado.
- Carro deve ser cadastrado, por padrão, com disponibilidade para alugar.
- Somente adminstrador tem autonomia para cadastrar e editar carros.

---
# Listagem de carros

### **RF -> Requisitos funcionais**
- Deve ser possivel listar os carros disponiveis para os clientes.
- Deve ser possivel listar todos os carros para os administradores.
- Deve ser possivel listar todos os carros disponiveis pelos nome da categoria.
- Deve ser possivel listar todos os carros disponiveis pelos nome da marca.
- Deve ser possivel listar todos os carros disponiveis pelos nome do carro.
 
### **RN -> Regras de negocio**
- O usuário não precisa estar logado no sistema para ver a lista de carros disponives.
  
---
# Cadastro de especificação nos carros

### **RF -> Requisitos funcionais**
- Deve ser possivel cadastrar uma especificação para um carro.
- Deve ser possivel listar todas as especificações.
- Deve ser possivel listar todos os carros.

### **RN -> Regras de negocio**
- Não deve ser possivel cadastrar uma especificação para um carro inexistente.
- Não deve ser possivel cadastrar uma especificação já existente para o mesmo carro.
- Somente adminstrador tem autonomia para cadastrar e editar especificações.
---
# Cadastro de imagens do carro

### **RF -> Requisitos funcionais**
- Deve ser possivel cadastrar uma imagem do carro.
- Deve ser possivel listar todos os carros.

### **RNF -> Requisitos não funcionais**
- Utilizar o Multer para o upload dos arquivos.

### **RN -> Regras de negocio**
- O usuário pode cadastrar mais de uma imagem para o mesmo carro.
- Somente adminstradores podem cadastrar imagens de carros.

---
# Aluguel de carro

### **RF -> Requisitos funcionais**
- Deve ser possivel cadastrar um aluguel.
### **RN -> Regras de negocio**
- O aluguel deve ter duração minima de 24 horas.
- Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
- - Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.



