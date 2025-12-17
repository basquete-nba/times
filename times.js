const teams = [

{
name: "Atlanta Hawks",
slug: "atlanta-hawks",
text: `Atlanta Hawks
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo.
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
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo.
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
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo.
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
Jalen Wilson
Hollywood Highsmith
Noah Clowney`
},

{
name: "Charlotte Hornets",
slug: "charlotte-hornets",
text: `Charlotte Hornets
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo.
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
LaMelo Ball
Brandon Miller
Moussa Diabaté
Miles Bridges
Kon Knueppel
Collin Sexton
Tre Mann`
},

{
name: "Chicago Bulls",
slug: "chicago-bulls",
text: `Chicago Bulls
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo.
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Josh Giddey
Nikola Vučević
Coby White
Matas Buzelis
Tre Jones
Ayo Dosunmu
Zach Collins`
},

{
name: "Cleveland Cavaliers",
slug: "cleveland-cavaliers",
text: `Cleveland Cavaliers
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo.
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Donovan Mitchell
Darius Garland
Evan Mobley
Jarrett Allen
De'Andre Hunter
Lonzo Ball
Max Strus
Dean Wade
Sam Merrill`
},

{
name: "Dallas Mavericks",
slug: "dallas-mavericks",
text: `Dallas Mavericks
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo.
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Kyrie Irving
P. J. Washington
Cooper Flagg
Anthony Davis
Daniel Gafford
Klay Thompson
Naji Marshall
Dereck Lively II`
},

{
name: "Denver Nuggets",
slug: "denver-nuggets",
text: `Denver Nuggets
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo.
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Nikola Jokic
Jamal Murray
Peyton Watson
Cameron Johnson
Aaron Gordon
Christian Braun
Tim Hardaway Jr.
Jonas Valančiūnas`
},

{
name: "Detroit Pistons",
slug: "detroit-pistons",
text: `Detroit Pistons
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo.
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Jalen Duren
Cade Cunningham
Tobias Harris
Ausar Thompson
Duncan Robinson
Jaden Ivey`
},

{
name: "Golden State Warriors",
slug: "golden-state-warriors",
text: `Golden State Warriors
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo.
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Stephen Curry
Jimmy Butler
Draymond Green
Jonathan Kuminga
Brandin Podziemski
Al Horford
Buddy Hield`
},

{
name: "Houston Rockets",
slug: "houston-rockets",
text: `Houston Rockets
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo.
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Kevin Durant
Alperen Şengün
Amen Thompson
Steven Adams
Fred VanVleet
Jabari Smith Jr.
Aaron Holiday`
},

{
name: "Indiana Pacers",
slug: "indiana-pacers",
text: `Indiana Pacers
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo.
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Pascal Siakam
Tyrese Haliburton
Bennedict Mathurin
Andrew Nembhard
Isaiah Jackson
Aaron Nesmith
Jarace Walker
T. J. McConnell`
},

{
name: "Los Angeles Lakers",
slug: "los-angeles-lakers",
text: `Los Angeles Lakers
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo.
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
LeBron James
Luka Dončić
Austin Reaves
Deandre Ayton
Rui Hachimura
Gabe Vincent
Jake LaRavia
Marcus Smart
Jaxson Hayes`
},

{
name: "Los Angeles Clippers",
slug: "los-angeles-clippers",
text: `Los Angeles Clippers
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo.
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
James Harden
Kawhi Leonard
Ivica Zubac
John Collins
Derrick Jones Jr.
Bradley Beal
Bogdan Bogdanović
Brook Lopez`
},

{
name: "Memphis Grizzlies",
slug: "memphis-grizzlies",
text: `Memphis Grizzlies
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo.
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Ja Morant
Jaren Jackson Jr.
Vince Williams Jr.
Zach Edey
Santi Aldama
Cam Spencer
Jaylen Wells
Cedric Coward`
},

{
name: "Miami Heat",
slug: "miami-heat",
text: `Miami Heat
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo.
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Tyler Herro
Norman Powell
Davion Mitchell
Kel'el Ware
Bam Adebayo
Andrew Wiggins
Jaime Jaquez Jr.`
},

{
name: "Milwaukee Bucks",
slug: "milwaukee-bucks",
text: `Milwaukee Bucks
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo.
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Giannis Antetokounmpo
Kevin Porter Jr.
Myles Turner
Ryan Rollins
Bobby Portis
Cole Anthony
Kyle Kuzma
A.J. Green
Taurean Prince
Gary Trent Jr.
Jericho Sims`
},

{
name: "Minnesota Timberwolves",
slug: "minnesota-timberwolves",
text: `Minnesota Timberwolves
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo.
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Anthony Edwards
Julius Randle
Donte DiVincenzo
Rudy Gobert
Jaden McDaniels
Naz Reid
Mike Conley Jr.`
},

{
name: "New Orleans Pelicans",
slug: "new-orleans-pelicans",
text: `New Orleans Pelicans
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo.
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Trey Murphy III
Zion Williamson
Derik Queen
Saddiq Bey
Jeremiah Fears
Dejounte Murray
Jose Alvarado`
},
  
{
name: "New York Knicks",
slug: "new-york-knicks",
text: `New York Knicks
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo.
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Jalen Brunson
Josh Hart
Mikal Bridges
OG Anunoby
Karl-Anthony Towns
Jordan Clarkson
Mitchell Robinson
Miles McBride`
},

{
name: "Oklahoma City Thunder",
slug: "oklahoma-city-thunder",
text: `Oklahoma City Thunder
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo.
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Shai Gilgeous-Alexander
Chet Holmgren
Jalen Williams
Isaiah Hartenstein
Ajay Mitchell
Aaron Wiggins
Luguentz Dort
Alex Caruso
Isaiah Joe`
},

{
name: "Orlando Magic",
slug: "orlando-magic",
text: `Orlando Magic
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo.
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Paolo Banchero
Franz Wagner
Desmond Bane
Jalen Suggs
Wendell Carter Jr.
Anthony Black
Tristan da Silva
Goga Bitadze`
},

{
name: "Philadelphia 76ers",
slug: "philadelphia-76ers",
text: `Philadelphia 76ers
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo.
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Tyrese Maxey
Joel Embiid
Quentin Grimes
Kelly Oubre Jr.
V. J. Edgecombe
Paul George
Trendon Watford`
},
  
{
name: "Phoenix Suns",
slug: "phoenix-suns",
text: `Phoenix Suns
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo.
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Devin Booker
Dillon Brooks
Collin Gillespie
Jalen Green
Royce O'Neale
Mark Williams
Grayson Allen`
},

{
name: "Portland Trail Blazers",
slug: "portland-trail-blazers",
text: `Portland Trail Blazers
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo.
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Deni Avdija
Shaedon Sharpe
Donovan Clingan
Jerami Grant
Damian Lillard
Toumani Camara
Scoot Henderson`
},

{
name: "Sacramento Kings",
slug: "sacramento-kings",
text: `Sacramento Kings
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo.
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
DeMar DeRozan
Zach LaVine
Domantas Sabonis
Keegan Murray
Malik Monk
Russell Westbrook
Dennis Schröder`
},
  
{
name: "San Antonio Spurs",
slug: "san-antonio-spurs",
text: `San Antonio Spurs
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo.
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Victor Wembanyama
Stephon Castle
De'Aaron Fox
Harrison Barnes
Keldon Johnson
Devin Vassell
Dylan Harper
Jeremy Sochan`
},

{
name: "Toronto Raptors",
slug: "toronto-raptors",
text: `Toronto Raptors
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo.
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Scottie Barnes
RJ Barrett
Brandon Ingram
Immanuel Quickley
Ja'Kobe Walter
Ochai Agbaji
Gradey Dick`
},

{
name: "Utah Jazz",
slug: "utah-jazz",
text: `Utah Jazz
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo.
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Lauri Markkanen
Jusuf Nurkić
Keyonte George
Walker Kessler
Kyle Filipowski
Isaiah Collier
Ace Bailey
Georges Niang`
},

{
name: "Washington Wizards",
slug: "washington-wizards",
text: `Washington Wizards
Por favor, me diga considerando os últimos 10 jogos dos jogadores abaixo.
Os pontos (pts) feitos, os rebotes (reb) feitos e as assistências (ast) feitas.
Gostaria em forma de tabela, separada por jogador.
Pode relacionar os jogos que o jogador não jogou também, ou seja, se for 0 (zero).
O resultado precisa ser em ordem do jogo mais atual no topo da lista e o mais antigo no fim da lista.
A fonte de pesquisa precisa ser o Google.
Alex Sarr
C. J. McCollum
Kyshawn George
Justin Champagnie
Khris Middleton
Corey Kispert
Bilal Coulibaly`
},


];

