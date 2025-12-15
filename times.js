const teams = [

{
name: "Atlanta Hawks",
slug: "atlanta-hawks",
text: `Atlanta Hawks
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo do Atlanta Hawks
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Jalen Johnson
Trae Young
Kristaps Porziņģis
Dyson Daniels
Onyeka Okongwu
Nickeil Alexander-Walker
Zaccharie Risacher`
},

{
name: "Boston Celtics",
slug: "boston-celtics",
text: `Boston Celtics
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo do Boston Celtics
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Jayson Tatum
Jaylen Brown
Derrick White
Neemias Queta
Payton Pritchard
Anfernee Simons
Sam Hauser
Josh Minott`
},

{
name: "Brooklyn Nets",
slug: "brooklyn-nets",
text: `Brooklyn Nets
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo do Brooklyn Nets
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Nic Claxton
Ziaire Williams
Cam Thomas
Day'Ron Sharpe
Michael Porter Jr.
Terance Mann
Jalen Williams
Noah Clowney`
},

{
name: "Charlotte Hornets",
slug: "charlotte-hornets",
text: `Charlotte Hornets
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo do Charlotte Hornets
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
LaMelo Ball
Brandon Miller
Miles Bridges
Mark Williams
Grant Williams`
},

{
name: "Chicago Bulls",
slug: "chicago-bulls",
text: `Chicago Bulls
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo do Chicago Bulls
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Zach LaVine
Nikola Vučević
Coby White
Patrick Williams
Ayo Dosunmu`
},

{
name: "Cleveland Cavaliers",
slug: "cleveland-cavaliers",
text: `Cleveland Cavaliers
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo do Cleveland Cavaliers
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Donovan Mitchell
Darius Garland
Evan Mobley
Jarrett Allen
Caris LeVert`
},

{
name: "Dallas Mavericks",
slug: "dallas-mavericks",
text: `Dallas Mavericks
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo do Dallas Mavericks
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Luka Dončić
Kyrie Irving
Dereck Lively II
PJ Washington
Tim Hardaway Jr.`
},

{
name: "Denver Nuggets",
slug: "denver-nuggets",
text: `Denver Nuggets
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo do Denver Nuggets
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Nikola Jokić
Jamal Murray
Michael Porter Jr.
Aaron Gordon
Kentavious Caldwell-Pope`
},

{
name: "Detroit Pistons",
slug: "detroit-pistons",
text: `Detroit Pistons
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo do Detroit Pistons
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Cade Cunningham
Jaden Ivey
Ausar Thompson
Jalen Duren
Isaiah Stewart`
},

{
name: "Golden State Warriors",
slug: "golden-state-warriors",
text: `Golden State Warriors
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo do Golden State Warriors
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Stephen Curry
Klay Thompson
Draymond Green
Jonathan Kuminga
Andrew Wiggins`
},

{
name: "Houston Rockets",
slug: "houston-rockets",
text: `Houston Rockets
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo do Houston Rockets
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Alperen Şengün
Jalen Green
Fred VanVleet
Jabari Smith Jr.
Amen Thompson`
},

{
name: "Indiana Pacers",
slug: "indiana-pacers",
text: `Indiana Pacers
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo do Indiana Pacers
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Tyrese Haliburton
Pascal Siakam
Myles Turner
Bennedict Mathurin
Buddy Hield`
},

{
name: "Los Angeles Lakers",
slug: "los-angeles-lakers",
text: `Los Angeles Lakers
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo do Los Angeles Lakers
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
LeBron James
Anthony Davis
Austin Reaves
D'Angelo Russell
Rui Hachimura`
},

{
ame: "Los Angeles Clippers",
slug: "los-angeles-clippers",
text: `Los Angeles Clippers
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo do Los Angeles Clippers
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Kawhi Leonard
Paul George
James Harden
Ivica Zubac
Terance Mann`
},

{
name: "Miami Heat",
slug: "miami-heat",
text: `Miami Heat
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo do Miami Heat
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Jimmy Butler
Bam Adebayo
Tyler Herro
Terry Rozier
Jaime Jaquez Jr.`
},

{
name: "Milwaukee Bucks",
slug: "milwaukee-bucks",
text: `Milwaukee Bucks
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo do Milwaukee Bucks
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Giannis Antetokounmpo
Damian Lillard
Khris Middleton
Brook Lopez
Bobby Portis`
},

{
name: "Minnesota Timberwolves",
slug: "minnesota-timberwolves",
text: `Minnesota Timberwolves
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo do Minnesota Timberwolves
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Anthony Edwards
Karl-Anthony Towns
Rudy Gobert
Mike Conley
Jaden McDaniels`
},

{
name: "New York Knicks",
slug: "new-york-knicks",
text: `New York Knicks
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo do New York Knicks
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Jalen Brunson
Julius Randle
RJ Barrett
Josh Hart
Mitchell Robinson`
},

{
name: "Oklahoma City Thunder",
slug: "oklahoma-city-thunder",
text: `Oklahoma City Thunder
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo do Oklahoma City Thunder
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Shai Gilgeous-Alexander
Josh Giddey
Chet Holmgren
Jalen Williams
Luguentz Dort`
},

{
name: "Phoenix Suns",
slug: "phoenix-suns",
text: `Phoenix Suns
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo do Phoenix Suns
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Kevin Durant
Devin Booker
Bradley Beal
Jusuf Nurkić
Grayson Allen`
},

{
name: "San Antonio Spurs",
slug: "san-antonio-spurs",
text: `San Antonio Spurs
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo do San Antonio Spurs
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Victor Wembanyama
Devin Vassell
Keldon Johnson
Jeremy Sochan
Tre Jones`
},

{
name: "Toronto Raptors",
slug: "toronto-raptors",
text: `Toronto Raptors
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo do Toronto Raptors
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Scottie Barnes
RJ Barrett
Immanuel Quickley
Jakob Poeltl
Gary Trent Jr.`
},

{
name: "Utah Jazz",
slug: "utah-jazz",
text: `Utah Jazz
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo do Utah Jazz
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Lauri Markkanen
Jordan Clarkson
Collin Sexton
Walker Kessler
Keyonte George`
},

{
name: "Washington Wizards",
slug: "washington-wizards",
text: `Washington Wizards
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo do Washington Wizards
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Kyle Kuzma
Jordan Poole
Tyus Jones
Daniel Gafford
Corey Kispert`
},


];

