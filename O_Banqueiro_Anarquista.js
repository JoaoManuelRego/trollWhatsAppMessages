async function enviarScript(scriptText) {
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	const main = document.querySelector("#main"),
		textarea = main.querySelector(`div[contenteditable="true"]`);
	
	if (!textarea) throw new Error("Não há uma conversa aberta");

	for (const line of lines) {
		console.log(line);

		// Clear the textarea content before typing a new message
		textarea.innerHTML = '';  // Ensure it's empty

		// Focus on the textarea and insert the message
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', { bubbles: true }));

		// Send the message after a short delay (100ms)
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);

		// Add a random delay between 5-15 seconds before sending the next message
		if (lines.indexOf(line) !== lines.length - 1) {
			const delay = Math.floor(Math.random() * (15000 - 5000 + 1)) + 5000; // random between 5000 and 15000 ms
			console.log(`Waiting ${delay} ms before next message...`);
			await new Promise(resolve => setTimeout(resolve, delay));
		}
	}

	return lines.length;
}
enviarScript(`
O BANQUEIRO ANARQUISTA 
Tínhamos acabado de jantar. Defronte de mim o meu amigo, o banqueiro, 
grande comerciante e açambarcador notável, fumava como quem não pensa. 
A conversa, que fora amortecendo, jazia morta entre nós. Procurei reanimá-la, 
ao acaso, servindo-me de uma ideia que me passou pela meditação. Voltei-me 
para ele, sorrindo. 


— É verdade: disseram-me há dias que você em tempos foi anarquista... 


— Fui, não: fui e sou. Não mudei a esse respeito. Sou anarquista. 


— Essa é boa! Você anarquista! Em que é que você é anarquista?... Só se 
você dá à palavra qualquer sentido diferente... 


— Do vulgar? Não; não dou. Emprego a palavra no sentido vulgar. 


— Quer você dizer, então, que é anarquista exatamente no mesmo sentido 
em que são anarquistas esses tipos das organizações operárias? Então entre 
você e esses tipos da bomba e dos sindicatos não há diferença nenhuma? 


— Diferença, diferença, há... Evidentemente que há diferença. Mas não é a 
que você julga. Você duvida talvez que as minhas teorias sociais sejam iguais 
às deles?... 


— Ah, já percebo! V., quanto às teorias, é anarquista; quanto à prática... 


— Quanto à prática sou tão anarquista como quanto às teorias. E quanto à 
prática sou mais, sou muito mais, anarquista que esses tipos que você citou. 
Toda a minha vida o mostra. 


— Hein?! 


— Toda a minha vida o mostra, filho. Você é que nunca deu a estas coisas 
uma atenção lúcida. Por isso lhe parece que estou dizendo uma asneira, ou 
então estou brincando consigo. 


— Ó homem, eu não percebo nada!... A não ser..., a não ser que você 
julgue a sua vida dissolvente e anti-social e dê esse sentido ao anarquismo... 


— Já lhe disse que não


— isto é, já lhe disse que não dou à palavra 
anarquismo um sentido diferente do vulgar. 


— Está bem... Continuo sem perceber... Ó homem, você quer-me dizer 
que não há diferença entre as suas teorias verdadeiramente anarquistas e a 
prática da sua vida


— a prática da sua vida como ela é agora? Você quer que 
eu acredite que você tem uma vida exatamente igual à dos tipos que 
vulgarmente são anarquistas? 


— Não; não é isso. O que eu quero dizer é que entre as minhas teorias e a 
prática da minha vida não há divergência nenhuma, mas uma conformidade 
absoluta. Lá que não tenho uma vida como a dos tipos dos sindicatos e das 
bombas


— isso é verdade. Mas é a vida deles que está fora do anarquismo, 
fora dos ideais deles. A minha não. Em mim


— sim, em mim, banqueiro, 
grande comerciante, açambarcador se você quiser


—, em mim a teoria e a 
prática do anarquismo estão conjuntas e ambas certas. Você comparou-me a 
esses parvos dos sindicatos e das bombas para indicar que sou diferente deles. 
Sou, mas a diferença é esta: eles (sim, eles e não eu) são anarquistas só na 
teoria; eu sou-o na teoria e na prática. Eles são anarquistas e estúpidos, eu 
anarquista e inteligente. Isto é, meu velho, eu é que sou o verdadeiro 
anarquista. Eles


— os dos sindicatos e das bombas (eu também lá estive e saí 
de lá exatamente pelo meu verdadeiro anarquismo)


— eles são o lixo do 
anarquismo, os fêmeas da grande doutrina libertária. 


— Essa nem ao diabo a ouviram! Isso é espantoso! Mas como concilia você 
a sua vida


— quero dizer a sua vida bancária e comercial


— coma as teorias 
anarquistas? Como o concilia V., se diz que por teoria anarquista entende 
exatamente o que os anarquistas vulgares entendem? E V., ainda por cima, me 
diz que é diferente deles por ser mais anarquista do que eles


— não é verdade? 


— Exatamente. 


— Não percebo nada. 


— Mas você tem empenho em perceber? 


— Todo o empenho. 
Ele tirou da boca o charuto, que se apagara; reacendeu-o lentamente; tirou 
o fósforo que se extinguia; depô-lo ao de leve no cinzeiro; depois, erguendo a 
cabeça, um momento abaixada, disse: 


— Oiça. Eu nasci do povo e na classe operária da cidade. De bom não 
herdei, como pode imaginar, nem a condição, nem as circunstâncias. Apenas 
me aconteceu ter uma inteligência naturalmente lúcida e uma vontade um 
tanto ou quanto forte. Mas esses eram domes naturais, que o meu baixo 
nascimento me não podia tirar. 
«Fui operário, trabalhei, vivi uma vida apertada; fui, em resumo, o que a 
maioria da gente é naquele meio. Não digo que absolutamente passasse fome, 
mas andei lá perto. De resto, podia tê-la passado, que isso não alterava nada 
do que se seguiu, ou do que lhe vou expor, nem do que foi a minha vida, nem 
do que ela é agora.» 
«Fui um operário vulgar, em suma; como todos, trabalhava porque tinha 
que trabalhar, e trabalhava o menos possível. O que eu era, era inteligente. 
Sempre que podia, lia coisas, discutia coisas, e, como não era tolo, nasceu-me 
uma grande insatisfação e uma grande revolta contra o meu destino e contra 
as condições sociais que o faziam assim. Já lhe disse que, em boa verdade, o 
meu destino podia ter sido pior do que era; mas naquela altura parecia-me a 
mim que eu era um entre a quem a Sorte tinha feito todas as injustiças juntas, 
e que se tinha servido das convenções sociais para mas fazer. Isto era aí pelos 
meus vinte anos


— vinte e um o máximo


— que foi quando me tornei 
anarquista.» 
Parou um momento. Voltou-se um pouco mais para mim. Continuou, 
inclinando-se mais um pouco. 


— Fui sempre mais ou menos lúcido. Senti-me revoltado. Quis perceber a 
minha revolta. Tornei-me anarquista consciente e convicto


— o anarquista 
consciente e convicto que hoje sou. 


— E a teoria, que você tem hoje, é a mesma que tinha nessa altura? 


— A mesma. A teoria anarquista, a verdadeira teoria, é só uma. Tenho a 
que sempre tive, desde que me tornei anarquista. Você já vai ver... Ia eu 
dizendo que, como era lúcido por natureza, me tornei anarquista consciente. 
Ora o que é um anarquista? É um revoltado contra a injustiça de nascermos 
desiguais socialmente


— no fundo é só isto. E de aí resulta, como é de ver, a 
revolta contra as convenções sociais que tornam essa desigualdade possível. O 
que lhe estou indicando agora é o caminho psicológico, isto é, como é que a 
gente se torna anarquista; já vamos à parte teórica do assunto. Por agora, 
compreenda você bem qual seria a revolta de um tipo inteligente nas minhas 
circunstâncias. O que é que ele vê pelo mundo? Um nasce filho de um 
milionário, protegido desde o berço contra aqueles infortúnios


— e não são 
poucos


— que o dinheiro pode evitar ou atenuar; outro nasce miserável, a ser, 
quando criança, uma boca a mais numa família onde as bocas são de sobra 
para o comer que pode haver. Um nasce conde ou marquês, e tem por isso a 
consideração de toda a gente, faça ele o que fizer; outro nasce assim como eu, 
e tem que andar direitinho como um prumo para ser ao menos tratado como 
gente. Uns nascem em tais condições que podem estudar, viajar, instruir-se


— 
tornar-se (pode-se dizer) mais inteligentes que outros que naturalmente o são 
mais. E assim por aí adiante, e em tudo... 
«As injustiças da Natureza, vá: não as podemos evitar. Agora as da 
sociedade e das suas convenções


— essas, por que não evitá-las? Aceito


— 
não tenho mesmo outro remédio


— que um homem seja superior a mim por 
o que a Natureza lhe deu


— o talento, a força, a energia; não aceito que ele 
seja meu superior por qualidades postiças, com que não saiu do ventre da 
mãe, mas que lhe aconteceram por bambúrrio logo que ele apareceu cá fora 


— a riqueza, a posição social, a vida facilitada, etc. Foi da revolta que lhe 
estou figurando por estas considerações que nasceu o meu anarquismo de 
então


— o anarquismo que, já lhe disse, mantenho hoje sem alteração 
nenhuma.» 
Parou outra vez um momento, como a pensar como prosseguiria. Fumou e 
soprou o fumo lentamente, para o lado oposto ao meu. Voltou-se, e ia a 
prosseguir. Eu, porém, interrompi-o. 


— Uma pergunta, por curiosidade... Por que é que você se tornou 
propriamente anarquista? Você podia ter-se tornado socialista, ou qualquer 
outra coisa avançada que não fosse tão longe. Tudo isso estava dentro da sua 
revolta... Deduzo do que você disse que por anarquismo você entende (e acho 
que está bem como definição do anarquismo) a revolta contra todas as 
convenções e fórmulas sociais e o desejo e esforço para a abolição de todas... 


— Isso mesmo. 


— Por que escolheu você essa fórmula extrema e não se decidiu por 
qualquer das outras... das intermédias?... 


— Eu lhe digo. Eu meditei tudo isso. É claro que nos folhetos que eu lia 
via todas essas teorias. Escolhi a teoria anarquista


— a teoria extrema, como 
você muito bem diz


— pelas razões que vou dizer em duas palavras. 
Fitou um momento coisa nenhuma. Depois voltou-se para mim. 


— O mal verdadeiro, o único mal, são as convenções e as ficções sociais, 
que se sobrepõem às realidades naturais


— tudo, desce a família ao dinheiro, 
desde a religião ao Estado. A gente nasce homem ou mulher


— quero dizer, 
nasce para ser, em adulto, homem ou mulher; não nasce, em boa justiça 
natural, nem para ser marido, nem para ser rico ou pobre, como também não 
nasce para ser católico ou protestante, ou português ou inglês. É todas estas 
coisas em virtude das ficções sociais. Ora essas ficções sociais são más por 
quê? Porque são ficções, porque não são naturais. Tão mau é o dinheiro como 
o Estado, a constituição de família como as religiões. Se houvesse outras, que 
não fossem estas, seriam igualmente más, porque também seriam ficções, 
porque também se sobreporiam e estorvariam as realidades naturais. Ora 
qualquer sistema que não seja o puro sistema anarquista, completamente, é 
uma ficção também. Empregar todo o nosso desejo, todo o nosso esforço, 
toda a nossa inteligência para implantar, ou contribuir para implantar, uma 
ficção social em vez de outra, é um absurdo, quando não seja mesmo um 
crime, porque é fazer uma perturbação social com o fim expresso de deixar 
tudo na mesma. Se achamos injustas as ficções sociais, porque esmagam e 
oprimem o que é natural no homem, para que empregar o nosso esforço em 
substituir-lhes outras ficções, se o podemos empregar para as destruir todas? 
«Isto parece-me que é concludente. Mas suponhamos que o não é; 
suponhamos que nos objetam que isto tudo estará muito certo, mas que o 
sistema anarquista não é realizável na prática. Vamos lá a examinar essa parte 
do problema.» 
«Por que é que o sistema anarquista não seria realizável? Nós partimos, 
todos os avançados, do princípio, não só de que o atual sistema é injusto, mas 
de que há vantagem, porque há injustiça, em substitui-lo por outro mais justo. 
Se não pensamos assim, não somos avançados, mas burgueses. Ora de onde 
vem este critério de justiça? Do que é natural e verdadeiro, em oposição às 
ficções sociais e às mentiras da convenção. Ora o que é natural é o que é 
inteiramente natural, não é metade, ou um quarto, ou um oitavo de natural. 
Muito bem. Ora, de duas coisas, uma: ou o natural é realizável socialmente ou 
não é; em outras palavras, ou a sociedade pode ser natural, ou a sociedade é 
essencialmente ficção e não pode ser natural de maneira nenhuma. Se a 
sociedade pode ser natural, então pode haver a sociedade anarquista, ou livre, 
e deve haver, porque é ela a sociedade inteiramente natural. Se a sociedade 
não pode ser natural, se (por qualquer razão que não importa) tem por força 
que ser ficção, então do mal o menos; façamo-la, dentro desse ficção 
inevitável, o mais natural possível. Qual é a ficção mais natural? Nenhuma é 
natural em si, porque é ficção; a mais natural, neste nosso caso, será aquela 
que pareça mais natural, que se sinta como mais natural? É aquela que 
estamos habituados. (você compreende: o que é natural é o que é do instinto; 
e o que não sendo instinto, se parece em tudo com o instinto é o hábito. 
Fumar não é natural, não é uma necessidade do instinto). Ora qual é a ficção 
social que constitui um hábito nosso? É o atual sistema, o sistema burguês. 
Temos pois, em boa lógica, que ou achamos a sociedade natural, e seremos 
defensores do anarquismo; ou não a julgamos possível, e seremos defensores 
do regime burguês. Não há hipótese intermédia. Percebeu?...» 


— Sim, senhor; isso é concludente. 


— Ainda não é bem concludente... Ainda há uma outra objeção, do meu 
género, a liquidar... Pode concordar-se que o sistema anarquista é realizável, 
mas pode duvidar-se que ele seja realizável de chofre


— isto é, que se possa 
passar da sociedade burguesa para a sociedade livre sem haver um ou mais 
estados ou regimes intermédios. Quem fizer essa objeção aceita como boa, e 
como realizável, a sociedade anarquista; mas palpita-lhe que tem que haver um 
estado qualquer de transição entre a sociedade burguesa e ela. 
«Ora muito bem. Suponhamos que assim é. O que é esse estado 
intermédio? O nosso fim é a sociedade anarquista, ou livre; esse intermédio só 
pode ser, portanto, um estado de preparação da humanidade para a sociedade 
livre. Essa preparação ou é material, ou é simplesmente mental; isto é, ou é 
uma série de realizações materiais ou sociais que vão adaptando a humanidade 
à sociedade livre, ou é uma simples propaganda gradualmente crescente e 
influente, que vai preparando mentalmente a desejá-la ou aceitá-la.» 
«Vamos ao primeiro caso, a adaptação gradual e material da humanidade à 
sociedade livre. É impossível; é mais que impossível: é absurdo. Não há 
adaptação material senão uma coisa que já há. Nenhum de nós se pode 
adaptar materialmente ao meio social do século XXIII, mesmo que saiba o 
que ele será; e não se pode adaptar materialmente porque o século XXIII e o 
seu meio social não existem materialmente ainda. Assim, chegamos à 
conclusão que, na passagem da sociedade burguesa para a sociedade livre, a 
única parte que pode haver de adaptação, de evolução ou de transição é 
mental, é a gradual adaptação dos espíritos à ideia da sociedade livre... Em 
todo o caso, no campo da adaptação material, ainda há uma hipótese...» 


— Irra com tanta hipótese!... 


— Ó filho, o homem lúcido tem que examinar todas as objeções possíveis 
e de as refutar, antes de se poder dizer seguro da sua doutrina. E, de mais a 
mais, isto tudo é em resposta a uma pergunta que você me fez... 


— Está bem. 


— No campo da adaptação material, dizia eu, há em todo o caso uma outra 
hipótese. É a da ditadura revolucionária. 


— Da ditadura revolucionária como? 


— Como eu lhe expliquei, não pode haver adaptação material a uma coisa 
que não existe, materialmente, ainda. Mas se, por um movimento brusco, se 
fizer a revolução social, fica implantada já, não a sociedade livre (porque para 
essa não pode a humanidade ter ainda preparação), mas uma ditadura daqueles 
que querem implantar a sociedade livre. Mas existe já , ainda que em esboço 
ou em começo, existe já materialmente qualquer coisa da sociedade livre. Há 
já portanto uma coisa material, a que a humanidade se adapte. É este o 
argumento com que as bestas que defendem a «ditadura do proletariado» a 
defenderiam se fossem capazes de argumentar ou de pensar. O argumento, é 
claro, não é deles: é meu. Ponho-o, como objeção, a mim mesmo. E, como 
lhe vou mostrar..., é falso. 
«Um regime revolucionário, enquanto existe, e seja qual for o fim a que visa 
ou a ideia que o conduz, é materialmente só uma coisa


— um regime 
revolucionário. Ora um regime revolucionário quer dizer uma ditadura de 
guerra, ou, nas verdadeiras palavras, um regime militar despótico, porque o 
estado de guerra é imposta à sociedade por uma parte dela


— aquela parte que 
assumiu revolucionariamente o poder. O que é que resulta? Resulta que quem 
se adaptar a esse regime, como a única coisa que ele é materialmente, 
imediatamente, é um regime militar despótico, adapta-se a um regime militar 
despótico. A ideia, que conduziu os revolucionários, o fim, a que visaram, 
desapareceu por completo da realidade social, que é ocupada exclusivamente 
pelo fenómeno guerreiro. De modo que o que sai de uma ditadura 
revolucionária


— e tanto mais completamente sairá, quanto mais tempo essa 
ditadura durar


— é uma sociedade guerreira do tipo ditatorial, isto é, um 
despotismo militar. Nem mesmo podia ser outra coisa. E foi sempre assim. 
Eu não sei muita história, mas o que sei acerta com isto; nem podia deixar de 
acertar. O que saiu das agitações políticas de Roma? O Império Romano e seu 
despotismo militar. O que saiu da Revolução Francesa? Napoleão e seu 
despotismo militar. E você verá o que sai da Revolução Russa... Qualquer 
coisa que vai atrasar dezenas de anos a realização da sociedade livre... 
Também o que era de se esperar de um povo de analfabetos e de místicos?...» 
«Enfim, isto já está fora de conversa... Você percebeu o meu argumento?» 


— Percebi perfeitamente. 


— Você compreende portanto que eu cheguei a esta conclusão: Fim: a 
sociedade anarquista, a sociedade livre; meio: a passagem, sem transição, da 
sociedade burguesa para a sociedade livre. Esta passagem seria preparada e 
tornada possível por uma propaganda intensa, completa, absorvente, de modo 
a predispor todos os espíritos e enfraquecer todas as resistências. É claro que 
por «propaganda» não entendo só a pela palavra escrita e falada: entendo tudo, 
ação indireta ou direta, quanto pode predispor para a sociedade livre e 
enfraquecer a resistência à sua vinda. Assim, não tendo quase resistência 
nenhuma que vencer, a revolução social, quando viesse, seria rápida, fácil, e 
não teria que estabelecer nenhuma ditadura revolucionária, por não ter contra 
quem aplica-la. Se isto não pode ser assim, é que o anarquismo é irrealizável; 
e, se o anarquismo é irrealizável, só é defensável e justa, como já lhe provei, a 
sociedade burguesa.» 
«Ora aí tem você por que e como eu me tornei anarquista, e por que e 
como rejeitei, como falsas e antinaturais, as outras doutrinas sociais de menor 
ousadia.» 
«E pronto... Vamos lá continuar a minha história.» 
Fez explodir um fósforo, e acendeu lentamente o charuto. Concentrou-se, e 
de aí a pouco prosseguiu. 
Havia vários outros rapazes com as mesmas opiniões que eu. A maioria era 
de operários, mas havia um ou outro que o não era; o que todos éramos era 
pobres, e, que me lembre, não éramos muito estúpidos. A gente tinha uma 
certa vontade de propaganda, de espalhar as nossas ideias. Queríamos para 
nós e para os outros


— para a humanidade inteira


— uma sociedade nova, 
livre destes preconceitos todos, que fazem os homens desiguais artificialmente 
e lhes impõem inferioridades, sofrimentos, estreitezas, que a Natureza lhes 
não tinha imposto. Por mim, o que eu lia confirmava-me nestas opiniões. Em 
livros libertários baratos


— os que havia ao tempo, e eram já bastantes


— li 
quase tudo. Fui a conferências e comícios dos propagandistas do tempo. Cada 
livro e cada discurso me convencia mais da certeza e da justiça das minhas 
ideias. O que eu pensava então


— repito-lhe, meu amigo


— é o que penso 
hoje, a única diferença é que então pensava-o só, hoje penso-o e pratico-o. 


— Pois sim; isso, até onde vai, está muito bem. Está muito certo que você 
se tornasse anarquista assim, e vejo perfeitamente que você era anarquista. 
Não preciso mais provas disso..., como é que saiu de aí sem contradição... Isto 
é, mais ou menos já calculo... 


— Não, não calcula nada... Eu sei o que você quer dizer... Você baseia-se 
nos argumentos que acaba de ouvir, e julga que eu achei o anarquismo 
irrealizável e por isso, como lhe disse, só defensável e justa a sociedade 
burguesa


— não é?... 


— Sim, calculei que fosse mais ou menos isso... 


— Mas como o podia ser, se desde o princípio da conversa lhe tenho dito e 
repetido que sou anarquista, que não só o fui mas o continuo sendo? Se eu me 
tivesse tornado banqueiro e comerciante pela razão que você julga, eu não era 
anarquista, era burguês. 


— Sim, você tem razão... Mas então como diabo...? Vá lá, vá dizendo... 


— Como lhe disse, eu era (fui sempre) mais ou menos lúcido, e também 
um homem de ação. Essas são qualidades naturais; não mas puseram no berço 
(se é que tive berço), eu é que as levei para lá. Pois bem. Sendo anarquista, eu 
achava insuportável ser anarquista passivamente, só para ir ouvir discursos e 
falar nisso com os amigos. Não: era preciso fazer qualquer coisa! Era preciso 
trabalhar e lutar pela causa dos oprimidos e das vítimas das convenções 
sociais! Decidi meter ombros a isso, conforme pudesse. Pus-me a pensar 
como é que eu poderia ser útil à causa libertária. Pus-me a traçar o meu plano 
de ação. 
«O que quer o anarquista? Liberdade


— a liberdade para si e para os outros, 
para a humanidade inteira. Quer estar livre da influência ou da pressão das 
ficções sociais; quer ser livre tal qual nasceu e pareceu no mundo, que é como 
em justiça deve ser; e quer essa liberdade para si e para todos os mais. Nem 
todos podem ser iguais perante a Natureza: uns nascem altos, outros baixos; 
uns fortes, outros fracos; uns mais inteligentes, outros menos... Mas todos 
podem ser iguais de aí em diante; só as ficções sociais o evitam. Essas ficções 
sociais é que era preciso destruir.» 
«Era preciso destrui-las... Mas não me escapou uma coisa: era preciso 
destrui-las... mas em proveito da liberdade, e tendo sempre em vista a criação 
da sociedade livre. Porque isso de destruir as ficções sociais tanto pode ser 
para criar liberdade, ou preparar o caminho da liberdade, como para 
estabelecer outras ficções sociais diferentes, igualmente más porque 
igualmente ficções. Aqui é que era preciso cuidado. Era preciso acertar com 
um processo de ação, qualquer que fosse a sua violência ou a sua não
violência (porque contra as injustiças sociais tudo era legítimo), pelo qual se 
contribuísse para destruir as ficções sociais sem, ao mesmo tempo, estorvar a 
criação da liberdade futura; criando já mesmo, caso fosse possível, alguma 
coisa da liberdade futura. 
«É claro que esta liberdade, que deve haver cuidado em não estorvar, é a 
liberdade futura e, no presente, a liberdade dos oprimidos pelas ficções 
sociais. Claro está que não temos que olhar a não estorvar a «liberdade» dos 
poderosos, dos bem situados, de todos que representam as ficções sociais e 
têm vantagens delas. Essa não é liberdade; é a liberdade de tiranizar, que é o 
contrário da liberdade. Essa pelo contrário, é o que mais devíamos pensar em 
estorvar e em combater. Parece-me que isto está claro...» 


— Está claríssimo. Continue... 


— Para quem quer o anarquismo a liberdade? Para a humanidade inteira. 
Qual é a maneira de se conseguir a liberdade para a humanidade inteira? 
Destruir por completo todas as ficções sociais? Já lhe antecipei a explicação, 
quando, por causa da sua pergunta, discuti os outros sistemas avançados e lhe 
expliquei como e por que era anarquista... Você lembra-se da minha 
conclusão?... 


— Lembro... 


— ... Uma revolução social súbita, brusca, esmagadora, fazendo a sociedade 
passar, de um salto, do regime burguês para a sociedade livre. Esta revolução 
social preparada por um trabalho intenso e contínuo, de ação direta e indireta, 
tendente a dispor todos os espíritos para a vinda da sociedade livre, e a 
enfraquecer até ao estado comatoso todas as resistências da burguesia. Escuso 
de lhe repetir as razões que levam inevitavelmente a esta conclusão, a dentro 
do anarquismo; já lhe expus e você já a percebeu. 


— Sim. 


— Essa revolução seria preferivelmente mundial, simultânea em todos os 
pontos, ou os pontos importantes, do mundo; ou não sendo assim, partindo 
rapidamente de uns para outros, mas em todo o caso, em cada ponto, isto é, 
em cada nação, fulminante e completa. 
«Muito bem. O que poderia eu fazer para esse fim? Só por mim, não a 
poderia fazer a ela, à revolução mundial, nem mesmo poderia fazer a 
revolução completa na parte referente ao país onde estava. O que podia era 
trabalhar, na inteira medida do meu esforço, para fazer a preparação para essa 
revolução. Já lhe expliquei como: combatendo, por rodos os meios acessíveis, 
as ficções sociais; não estorvando nunca ao fazer esse combate ou a 
propaganda da sociedade livre, nem a liberdade futura, nem a liberdade 
presente dos oprimidos; criando já, sendo possível, qualquer coisa da futura 
liberdade.» 
Puxou fumo; fez uma leve pausa; recomeçou. 


— Ora aqui, meu amigo, pus eu a minha lucidez em ação. Trabalhar para o 
futuro, está bem, pensei eu; trabalhar para os outros terem liberdade, está 
certo. Mas então eu? Eu não sou ninguém? Se eu fosse cristão, trabalhava 
alegre mente pelo futuro dos outros, porque lá tinha a minha recompensa no 
céu; mas também, se eu fosse cristão, não era anarquista, porque então as tais 
desigualdades sociais não tinham importância na nossa curta vida: eram só 
condições da nossa provação, e lá seriam compensadas na vida eterna. Mas eu 
não era cristão, como não sou, e perguntava-me: mas por quem é que eu me 
vou sacrificar nisto tudo? Mais ainda: por que é que eu me vou sacrificar? 
«Vieram-me momentos de descrença; e você compreende que era 
justificada... Sou materialista, pensava eu; não tenho mais vida que esta; para 
que hei de ralar-me com propagandas e desigualdades sociais, e outras 
histórias, quando posso gozar e entreter-me muito mais se não me preocupar 
com isso? Quem tem só esta vida, quem não crê na vida eterna, quem não 
admite lei senão a Natureza, quem se opõe ao Estado porque ele não é 
natural, ao casamento porque ele não é natural, ao dinheiro porque ele não é 
natural, porque carga de água é que defende o altruísmo e o sacrifício pelos 
outros, ou pela humanidade, se o altruísmo e o sacrifício também não são 
naturais? Sim, a mesma lógica que me mostra que um homem não nasce para 
ser casado, ou para ser português, ou para ser rico ou pobre, mostra-me 
também que ele não nasce para ser solidário, que ele não nasce senão para ser 
ele-próprio, e portanto o contrário de altruísta e solidário, e portanto 
exclusivamente egoísta.» 
«Eu discuti a questão comigo mesmo. Repara tu, dizia eu para mim, que 
nascemos pertencentes à espécie humana, e que temos o dever de ser 
solidários com todos os homens. Mas a ideia de “dever” era natural? De onde 
é que vinha esta ideia de “dever”? Se esta ideia de dever me obrigava a 
sacrificar o meu bem-estar, a minha comodidade, o meu instinto de 
conservação e outros meus instintos naturais, em que divergia a ação dessa 
ideia da ação de qualquer ficção social, que produz em nós exatamente o 
mesmo efeito?» 
«Esta ideia de dever, isto de solidariedade humana; só podia considerar-se 
natural se trouxesse consigo uma compensação egoísta, porque então, embora 
em princípio contrariasse o egoísmo natural, se dava a esse egoísmo uma 
compensação, sempre, no fim de contas, o não contrariava. Sacrificar um 
prazer, simplesmente sacrificá-lo, não é natural; sacrificar um prazer a outro, é 
que já está dentro da Natureza: é, entre duas coisas naturais que se não podem 
ter ambas, escolher uma, o que está bem. Ora que compensação egoísta, ou 
natural, podia dar-me a dedicação à causa da sociedade livre e da futura 
felicidade humana? Só a consciência de dever cumprido, do esforço para um 
fim bom; e nenhuma destas coisas é uma compensação egoísta, nenhuma 
destas coisas é um prazer em si, mas um prazer, se o é, nascido de uma ficção 
social, como pode ser o prazer de ser imensamente rico, ou o prazer de ter 
nascido em um boa posição social.» 
«Confesso-lhe, meu velho, que me vieram momentos de descrença... Senti
me desleal à minha própria doutrina, traidor a ela... Mas em breve passei sobre 
tudo isto. A ideia de justiça cá estava, dentro de mim, pensei eu. Eu sentia-a 
natural. Eu sentia que havia um dever superior à preocupação só cá do meu 
destino. E fui para diante na minha intenção.» 


— Não me parece que essa decisão revelasse uma grande lucidez da sua 
parte... Você não resolveu a dificuldade... Você foi para diante por um 
impulso absolutamente sentimental... 


— Sem dúvida. Mas o que lhe estou contando agora é a história de como 
me tornei anarquista, e de como o continuei sendo, e continuo. Vou-lhe 
expondo lealmente as hesitações e as dificuldades que tive, e como as venci. 
Concordo que, naquele momento, venci a dificuldade lógica com o 
sentimento, e não com o raciocínio. Mas você há de ver que, mais tarde, 
quando cheguei à plena compreensão da doutrina anarquista, esta dificuldade, 
até então logicamente sem resposta, teve a sua solução completa e absoluta. 


— É curioso... 


— É... Agora deixe-me continuar na minha história. Tive esta dificuldade, e 
resolvi-a se bem que mal, como lhe disse. Logo a seguir, e na linha dos meus 
pensamentos, surgiu-me outra dificuldade que também me atrapalhou 
bastante. 
«Estava bem


— vamos lá


— que estivesse disposto a sacrificar-me, sem 
recompensa nenhuma propriamente pessoal, isto é, sem recompensa 
nenhuma verdadeiramente natural. Mas suponhamos que a sociedade futura 
não dava em nada do que eu esperava, que nunca havia a sociedade livre, e 
que diabo é que eu, nesse case, me estava sacrificando? Sacrificar-me a uma 
ideia sem recompensa pessoal, sem eu ganhar nada com o meu esforço por 
essa ideia, vá; mas sacrificar-me sem ao menos ter a certeza de que aquilo para 
que eu trabalhava, existiria um dia, sem que a própria ideia ganhasse com o 
meu esforço


— isso era um pouco mais forte... Desde já lhe digo que resolvi a 
dificuldade pelo mesmo processo sentimental por que resolvi a outra; mas 
advirto-o também que, do mesmo modo que a outra, resolvi esta pela lógica, 
automaticamente, quando cheguei ao estado plenamente consciente do meu 
anarquismo... Você depois verá... Na altura do que lhe estou contando, saí-me 
do apuro com uma ou duas frases ocas. «Eu fazia o meu dever para com o 
futuro; o futuro que fizesse o seu para comigo... Isto, ou coisa que o valha...» 
«Expus esta conclusão, ou, antes estas conclusões, aos meus camaradas, e 
eles concordaram todos comigo concordaram todos que era preciso ir para a 
frente e fazer tudo pela sociedade livre. É a verdade que um ou outro, dos 
mais inteligentes, ficaram um pouco abalados com a exposição, não porque 
não concordassem, mas porque nunca tinham visto as coisas assim claras, 
nem os bicos que estas coisas têm... Mas enfim, concordaram todos... Iríamos 
todos trabalhar pela grande revolução social, pela sociedade livre, quer o 
futuro nos justificasse, quer não! Formamos um grupo, entre gente certa, e 
começamos uma grande propaganda


— grande, é claro, dentro dos limites 
doo que podíamos fazer. Durante bastante tempo, no meio de dificuldades, 
embrulhadas, e por vezes perseguições, lá fomos trabalhando pelo ideal 
anarquista.» 
O banqueiro, chegado aqui, fez uma pausa um pouco mais longa. Não 
acendeu o charuto, que estava outra vez apagado. De repente teve um leve 
sorriso, e, com o ar de quem chega ao ponto importante, fitou-me com mais 
insistência e prosseguiu, clarificando mais a voz e acentuando mais as palavras. 


— Nesta altura, disse ele, apareceu uma coisa nova. «Nesta altura» é modo 
de dizer. Quero dizer que, depois de alguns meses desta propaganda, comecei 
a reparar numa nova complicação, e esta é que era a mais séria de todas, esta é 
que era séria a valer... 
«Você recorda-se, não é verdade? Daquilo em que eu, por um raciocínio 
rigoroso, assentei que devia ser o processo de ação dos anarquistas... Um 
processo, ou processos, quaisquer pelo qual se contribuísse para destruir as 
ficções sociais sem, ao mesmo tempo, estorvar a criação da liberdade futura, 
sem, portanto, estorvar em coisa nenhuma a pouca liberdade dos tatuais 
oprimidos pelas ficções sociais; um processo que, sendo possível, criasse já 
alguma coisa da liberdade futura...» 
«Pois bem: uma vez assente este critério, nunca mais deixei de o ter 
presente... Ora, na altura da nossa propaganda em que estou falando, descobri 
uma coisa. No grupo de propaganda


— não éramos muitos; éramos quarenta, 
salvo erro


— dava-se este caso: criava-se tirana.» 


— Criava-se tirania?... Criava-se tirania como? 


— Da seguinte maneira... Uns mandavam em outros e levavam-nos para 
onde queriam; uns impunham-se a outros e obrigavam-nos a ser o que eles 
queriam; uns arrastavam outros por manhas e por artes para onde eles 
queriam. Não digo que fizessem isto em coisas graves; mesmo, não havia 
coisas graves ali em que o fizessem. Mas o fato é que isto acontecia sempre e 
todos os dias, e dava-se não só em assuntos relacionados com a propaganda, 
como fora deles, em assuntos vulgares da vida. Uns iam insensivelmente para 
chefes, outros insensivelmente para subordinados. Uns eram chefes por 
imposição; outros eram chefes por manha. No fato mais simples isto se via. 
Por exemplo: dois dos rapazes iam juntos por uma rua fora; chegavam ao fim 
da rua, e um tinha que ir para a direita e outro para a esquerda; cada um tinha 
conveniência em ir para o seu lado. Mas o que ia para a esquerda dizia para o 
outro, «venha você comigo por aqui»; o outro respondia, e era verdade, 
«Homem, não posso; tenho que ir por ali» por esta ou aquela razão... Mas 
afinal, contra sua vontade e sua conveniência, lá ia com o outro para a 
esquerda... Isto era uma vez por persuasão, outra vez por simples insistência, 
uma terceira vez por um outro motivo qualquer... Isto é, nunca era por uma 
razão lógica; havia sempre nesta imposição e nesta subordinação qualquer 
coisa de espontâneo, de como que instintivo... E como neste caso simples, em 
todos os outros casos; desde os menos até aos mais importantes... Você vê 
bem o caso? 


— Vejo. Mas que diabos há de estranho nisso? Isso é tudo quanto há de 
mais natural... 


— Será. Já vamos a isso. O que lhe peço que note é que é exatamente o 
contrário da doutrina anarquista. Repare bem que isto se passava num grupo 
pequeno, num grupo sem influência nem importância, num grupo a quem não 
estava confiada a solução de nenhuma questão grave ou decisão sobre 
qualquer assunto de vulto. E repare que se passava num grupo de gente que se 
unira especialmente para fazer o que pudesse para o fim anarquista


— isto é, 
para combate, tanto quando possível, as ficções sociais, e criar, tanto quando 
possível, a liberdade futura. Você reparou bem nestes dois pontos? 


— Reparei. 


— Veja agora bem o que isto representa... Um grupo pequeno, de gente 
sincera (garanto-lhe que era sincera!), estabelecido e unido expressamente para 
trabalhar pela causa da liberdade, tinha, no fim de uns meses, conseguido só 
uma coisa de positivo e concreto


— a criação entre si de tirania. E repare que 
tirania... Não era uma tirania derivada da ação das ficções sociais, que, embora 
lamentável, seria desculpável, até certo ponto, ainda que menos em nós, que 
combatíamos essas ficções, que em outras pessoas; mas enfim, vivíamos em 
meio de uma sociedade baseada nessas ficções e não era inteiramente culpa 
nossa se não pudéssemos de todo fugir à sua ação. Mas não era isso. Os que 
mandavam nos outros, ou os levavam para onde queriam, não faziam isso pela 
força do dinheiro, ou da posição social, ou de qualquer autoridade de natureza 
fictícia, que se arrogassem; faziam-no por uma ação de qualquer espécie fora 
das ficções sociais, uma tirania nova. E era uma tirania exercida sobre gente 
essencialmente oprimida já pelas ficções sociais. Era, ainda por cima, tirania 
exercida entre si por gente cujo intuito sincero não era senão destruir tirania e 
criar liberdade. 
«Agora ponha o caso num grupo muito maior, muito mais influente, 
tratando já de questões importantes e de decisões de carácter fundamental. 
Ponha esse grupo a encaminha os seus esforços, como o nosso, para a 
formação de um sociedade livre. E agora diga-me se através desse 
carregamento de tiranias entrecruzadas você entrevê qualquer sociedade futura 
que se pareça com uma sociedade livre ou com um humanidade digna de si 
própria...» 


— Sim: isso é muito curioso... 


— É curioso, não é?...E olhe que há pontos secundários também muito 
curiosos... Por exemplo: a tirania do auxílio... 


— A quê? 


— A tirania do auxílio. Havia entre nós quem, em vez de mandar nos 
outros, em vez de se impor aos outros, pelo contrário os auxiliava em tudo 
quanto podia. Parece o contrário, não é verdade? Pois olhe que é o mesmo. É 
a mesma tirania nova. É do mesmo modo ir contra os princípios anarquistas. 


— Essa é boa? Em quê? 


— Auxiliar alguém, meu amigo, é tomar alguém por incapaz; se esse 
alguém não é incapaz, é ou fazê-lo tal, ou supô-lo tal, e isto é, no primeiro 
caso uma tirania, e no segundo um desprezo. Num caso cerceia-se a liberdade 
de outrem; no outro caso parte-se, pelo menos inconscientemente, do 
princípio de que outrem é desprezível e indigno ou incapaz de liberdade. 
«Voltemos ao nosso caso... Você vê bem que este ponto era gravíssimo. Vá 
que trabalhássemos pela sociedade futura sem esperarmos que ela nos 
agradecesse, ou arriscando-nos, mesmo, a que ela nunca viesse. Tudo isso, vá. 
Mas o que era demais era estarmos trabalhando para um futuro de liberdade e 
não fazermos, de positivo, mais que criar tirania, e não só tirania, mas tirania 
nova, e tirania exercida por nós, os oprimidos, uns sobre os outros. Ora isto é 
que não pode ser...» 
«Pus-me a pensar. Aqui havia um erro, um desvio qualquer. Os nossos 
intuitos eram bons; as nossas doutrinas pareciam certas; seriam errados os 
nossos processos? Com certeza que deveriam ser. Mas onde diabo estava o 
erro? Pus-me a pensar nisso e ia dando em doido. Um dia, de repente, como 
acontece sempre nestas coisas, dei com a solução. Foi o grande dia das minhas 
teorias anarquistas; o dia em que descobri, por assim dizer, a técnica do 
anarquismo.» 
Olhou-me um momento sem me olhar. Depois continuou, no mesmo tom. 


— Pensei assim... Temos aqui uma tirania nova, uma tirania que não é 
derivada das ficções sociais. Então de onde é que ela derivada? Será derivada 
das qualidades naturais? Se é, adeus sociedade livre! Se uma sociedade onde 
estão em operação apenas as qualidades naturais dos homens


— aquelas 
qualidades com que eles nascem, que devem só à Natureza, e sobre as quais 
não temos poder nenhum


—, se uma sociedade onde estão em operação 
apenas essas qualidades é um amontoado de tiranias, quem é que vai mexer o 
dedo mínimo para contribuir para a vinda dessa sociedade? Tirania por tirania, 
fique a que está, que ao menos é aquela a que estamos habituados, e que por 
isso fatalmente sentimos menos que estaríamos uma tirania nova, e com o 
carácter terrível de todas as coisas tirânicas que são diretamente da Natureza 


— o não haver revolta possível contra ela, como não há revolução contra ter 
que morrer, ou contra nascer baixo quando se preferia ter nascido alto. 
Mesmo, eu já lhe provei que, se por qualquer razão não é realizável a 
sociedade anarquista, então deve existir, por ser mais natural que qualquer 
outra salvo aquela, a sociedade burguesa. 
«Mas seria esta tirania, que nascia assim entre nós, realmente derivada das 
qualidades naturais? Ora o que são as qualidades naturais? São o grau de 
inteligência, de imaginação, de vontade, etc., com que cada um nasce


— isto 
no campo mental, é claro, porque as qualidades naturais físicas não vêm para 
o caso. Ora um tipo que, sem ser por uma razão derivada das ficções sociais, 
manda noutro, por força que o faz por lhe ser superior em uma ou outra das 
qualidades naturais. Domina-o pelo emprego das suas qualidades naturais. 
Mas há uma coisa a ver: esse emprego das qualidades naturais será legítimos, 
isto é, será natural?» 
«Ora qual é o emprego natural das nossas qualidades naturais? O servir os 
fins naturais da nossa personalidade. Ora dominar alguém será um fim natural 
da nossa personalidade? Pode sê-lo; há um caso em que pode sê-lo: é quando 
esse alguém está para nós num lugar de inimigo. Para o anarquista, é claro, 
quem está num lugar de inimigo, é qualquer representante das ficções sociais e 
da sua tirania; mais ninguém, porque todos os outros homens são homens 
como ele e camaradas naturais. Ora, você bem vê, o caso da tirania, que 
tínhamos estado criando, era exercida sobre homens como nós, camaradas 
naturais, e, mais ainda, sobre homens duas vezes nossos camaradas, porque o 
eram também pela comunhão do mesmo ideal. Conclusão: esta nossa tirania, 
se não era derivada das ficções sociais, também não era derivada das 
qualidades naturais; era derivada duma aplicação errada, duma perversão, das 
qualidades naturais. E essa perversão, de onde é que provinha?» 
«Tinha que provir de uma de duas coisas: ou de o homem ser naturalmente 
mau, e portanto todas as qualidades naturais serem naturalmente pervertidas; 
ou de uma perversão resultante da longa permanência da humanidade numa 
atmosfera de ficções sociais, todas elas criadoras de tirania, e tendente, 
portanto, a tornar já instintivamente tirânico o uso mais natural das qualidades 
mais naturais. Ora, destas duas hipóteses, qual é que seria a verdadeira? De um 
modo satisfatório


— isto é, rigorosamente lógico ou científico


— era 
impossível determinar. O raciocínio não pode entrar com o problema, porque 
ele é de ordem histórica, ou científica, e depende do conhecimento de fatos. 
Por seu lado, a ciência também nos não ajuda, porque, por mais longe que 
recuemos na história, encontramos sempre o homem vivendo sob um ou 
outro sistema de tirania social, e portanto sempre num estado que nos não 
permite averiguar como é o homem quando vive em circunstâncias pura e 
inteiramente naturais. Não havendo maneira de determinar ao certo, temos 
que pender para o lado da maior probabilidade; e a maior probabilidade está 
na segunda hipótese. É mais natural supor que a longuíssima permanência da 
humanidade em ficções sociais criadoras de tirania faça cada homem nascer já 
com as suas qualidade naturais pervertidas no sentido de tiranizar, do que 
supor que qualidades naturais podem ser naturalmente pervertidas, o que, de 
certo modo, representa una contradição. Por isso o pensador decide-se, como 
eu me decidi, com uma quase absoluta segurança, pela segunda hipótese.» 
«Temos, pois, que uma coisa é evidente... No estado social presente não é 
possível um grupo de homens, por bem intencionados que estejam todos, por 
preocupados que estejam todos só em combater as ficções sociais e em 
trabalhar pela liberdade, trabalharem juntos sem que espontaneamente criem 
entre si tirania, sem criar entre si uma tirania nova, suplementar à das ficções 
sociais, sem destruir na prática tudo quanto querem na teoria, sem 
involuntariamente estorvar o mais possível o próprio intuito que querem 
promover. O que há a fazer? É muito simples... É trabalharmos todos para o 
mesmo fim, mas separados.» 


— Separados? 


— Sim. Você não seguiu o meu argumento? 


— Segui. 


— E não acha lógica, não acha fatal esta conclusão? 


— Acho, sim, claro... Disse eu: trabalharmos todos para o mesmo fim, mas 
separados. Trabalharmos todos para o mesmo fim anarquista, cada um 
contribui com o seu esforço para a destruição das ficções sociais, que é para 
onde o dirige, e para a criação da sociedade livre do futuro; e trabalhando 
separados não podemos, de modo nenhum, criar tirania nova, porque 
nenhum tem ação sobre o outro, e não pode portanto, nem, dominando-o, 
diminuir-lhe a liberdade, nem, auxiliando-o, apagar-lha. 
«Trabalhando assim separados e para o mesmo fim anarquista, temos as 
duas vontades


— a do esforço, e a da não criação de tirania nova. 
Continuamos unidos, porque o estamos moralmente e trabalhamos do mesmo 
modo para o mesmo fim; continuamos anarquistas, porque cada um trabalha 
para a sociedade livre; mas deixamos de ser traidores, voluntários ou 
involuntários, à nossa coisa, deixamos mesmo de poder sê-lo, porque nos 
colocamos, pelo trabalho anarquista isolado, fora da influência deletéria das 
ficções sociais, no seu reflexo hereditário sobre as qualidades que a Natureza 
deu.» 
«É claro que toda esta tática se aplica ao que eu chamei de período de 
preparação para a revolução social. Arruinadas as defesas burguesas, e 
reduzida a sociedade inteira ao estado de aceitação das doutrinas anarquistas, 
faltando só fazer a revolução social, então, para o golpe final, é que não pode 
continuar a ação separada. Mas nessa altura, já a sociedade livre estará 
virtualmente chagada; já as coisas serão de outra maneira. A tática a que me 
refiro só diz respeito à ação anarquista em meio da sociedade burguesa, como 
agora, como no grupo a que eu pertencia.» 
«Era esse


— até que enfim!


— o verdadeiro processo anarquista. Juntos, 
nada valíamos, que importasse, e, ainda por cima, nos tiranizávamos, e nos 
estorvávamos uns aos outros e às nossas teorias. Separados, pouco também 
conseguiríamos, mas ao menos não estorvávamos a liberdade, não criávamos 
tirania nova; o que conseguíamos, pouco que fosse, era realmente conseguido, 
sem desvantagem nem perda. E, de mais a mais, trabalhávamos assim 
separados, aprendíamos a confiar mais em nós mesmos, a não nos 
encostarmos uns aos outros, a tornarmo-nos mais livres já, a prepararmo-nos, 
tanto pessoalmente, como aos outros pelo nosso exemplo, para o futuro.» 
«Fiquei radiante com essa descoberta. Fui logo expô-la aos meus 
camaradas... Foi uma das poucas vezes em que fui estúpido na minha vida. 
Imagine você que eu estava tão cheio da minha descoberta que esperava que 
eles concordassem...» 


— Não concordaram, é claro... 


— Repontaram, meu amigo, repontaram todos! Uns mais, outros menos, 
tudo protestou!... Não era isso!... Isso não podia ser!... Mas ninguém dizia o 
que era ou o que é que havia de ser. Argumentei e argumentei, e, em resposta 
aos meus argumentos, não obtive senão frases, lixo coisas como essas que os 
ministros respondem nas câmaras quando não têm resposta nenhuma... Então 
é 
que eu vi com que bestas e com que covardões estava metido! 
Desmascararam-se. Aquela corja tinha nascido para escravos. Queriam ser 
anarquistas à custa alheia. Queriam a liberdade, logo que fossem os outros que 
lha arranjassem, logo que lhe fosse dada como um rei dá um título! Quase 
todos eles são assim, os grandes lacaios! 


— E V., escamou-se? 


— Se me escamei! Enfureci-me! Pus-me aos coices. Dei por paus e por 
pedras. Quase que me peguei com dois ou três deles. E acabei por me vir 
embora. Isolei-me. Veio-me um nojo àquela carneirada toda, que você não 
imagina! Quase que descri no anarquismo. Quase que decidi não me importar 
mais com tudo aquilo. Mas, passados uns dias, voltei a mim. Pensei que o 
ideal anarquista estava acima destas quezílias. Eles não queriam só brincar aos 
libertários? Não estava eu para brincar num caso desses. Eles não tinham 
força para combater senão encostados uns aos outros, e criando, entre si, um 
simulacro novo da tirania que diziam querer combater? Pois que o fizessem, 
os parvos, se não serviam para mais. Eu é que não ia ser burguês por tão 
pouco. 
«Estava estabelecido que, no verdadeiro anarquismo, cada um tem que, por 
sua própria forças, criar liberdade e combater as ficções sociais. Pois por 
minha própria forças eu ia criar liberdade e combater as ficções sociais. 
Ninguém queria seguir-me no verdadeiro caminho anarquista? Seguiria eu por 
ele. Iria eu só, com os meus recursos, com a minha fé, desacompanhado até 
do apoio mental dos que tinham sido meus camaradas, contra as ficções 
sociais inteiras. Não digo que fosse um belo gesto, nem um gesto heroico. Foi 
simplesmente um gesto natural. Se o caminho tinha que ser seguido por cada 
um separadamente, eu não precisava de mais ninguém para o seguir. Bastava o 
meu ideal. Foi baseado nestes princípios e nestas circunstâncias que decidi, 
por mim só, combater as ficções sociais.» 
Suspendeu um pouco o discurso, que se lhe tornara quente e fluido. 
Retomou-o de ali a pouco, com a voz já mais sossegada. 


— É um estado de guerra, pensei eu, entre mim e as ficções sociais. Muito 
bem. O que posso eu fazer contra as ficções sociais? Trabalho sozinho, para 
não poder, de modo nenhum, criar qualquer tirania. Como posso eu colaborar 
sozinho na preparação da revolução social, na preparação da humanidade para 
a sociedade livre? Tenho que escolher um de dois processos, dos dois 
processos que há; caso, é claro, não possa servir-me de ambos. Os dois 
processos, são a ação indireta, isto é, a propaganda, e a ação direta, de 
qualquer espécie. 
«Pensei primeiro na ação indireta, isto é, na propaganda. Que propaganda 
poderia eu fazer só por mim? À parte esta propaganda que sempre se vai 
fazendo em conversa, com este ou aquele, ao acaso e servindo-nos de todas as 
oportunidades, o que eu queria saber era se a ação indireta era um caminho 
por onde eu pudesse encaminhar a minha atividade de anarquista 
energicamente, isto é, de modo a produzir resultados sensíveis. Vi logo que 
não podia ser. Não sou orador e não sou escritor. Quero dizer, sou capaz de 
falar em público, se for preciso, e sou capaz de escrever um artigo de jornal; 
mas o que eu queria averiguar era se o meu feitio natural indicava que, 
especializando-me na ação indireta, de qualquer das duas espécies ou em 
ambas, eu poderia obter resultados mais positivos para a ideia anarquista que 
especializando os meus esforços em qualquer outro sentido. Ora a ação é 
sempre mais proveitosa que a propaganda, exceto para os indivíduos cujo 
feitio os indica essencialmente como propagandistas


— os grandes oradores, 
capazes de eletrizar multidões e arrastá-las atrás de si, ou os grandes escritores, 
capazes de fascinar e convencer com os seus livros. Não me parece que eu 
seja muito vaidoso, mas, se o sou, não me dá, pelo menos, para me envaidecer 
daquelas qualidades que não tenho. E, como lhe disse, nunca me deu para me 
julgar orador ou escritor. Por isso abandonei a ideia da ação indireta como 
caminho a dar à minha atividade anarquista. Por exclusão de partes, era 
forçado a escolher a ação direta, isto é, o esforço aplicado à prática da vida, à 
vida real. Não era a inteligência, mas a ação. Muito bem. Assim seria.» 
«Tinha eu pois que aplicar à vida prática o processo fundamental de ação 
anarquista que eu já tinha esclarecido


— combater as ficções sociais sem criar 
tirania nova, criando já, caso fosse possível, qualquer coisa da liberdade futura. 
Ora como diabo se faz isso na prática?» 
«Ora o que é combater na prática? Combater na prática é a guerra, é uma 
guerra, pelo menos. Como é que se faz guerra às ficções sociais? Antes de 
mais nada, como é que se faz guerra? Como é que se vence o inimigo em 
qualquer guerra? De uma de duas maneiras: ou matando-o isto é, destruindo
o; ou aprisionando-o, isto é, subjugando-o, reduzindo-o à inatividade. Destruir 
as ficções sociais não podia eu fazer; destruir as ficções sociais só o podia 
fazer a revolução social. Até ali, as ficções sociais podiam estar abaladas, 
cambaleando, por um fio; mas destruídas, só o estariam com a vinda da 
sociedade livre e a queda positiva da sociedade burguesa. O mais que eu 
poderia fazer nesse sentido era destruir


— destruir no sentido físico de matar 


— um ou outro membro da classes representativas da sociedade burguesa. 
Estudei o caso, e vi que era asneira. Suponha você que eu matava um ou dois, 
ou uma dúzia de representante da tirania das ficções sociais... O resultado? As 
ficções sociais ficariam abaladas? Não ficariam. As ficções sociais não são 
como um situação política que pode depender de um pequeno número de 
homens, de um só homem por vezes. O que há de mau nas ficções sociais são 
elas, no seu conjunto, e não os indivíduos que as representam senão por 
serem representantes delas. Depois, um atentado de ordem social produz 
sempre uma relação; não só tudo fica na mesma, mas, as mais das vezes, piora. 
E, ainda por cima, suponha, como é natural, que, depois de um atentado, eu 
era caçado; era caçado e liquidado, de uma maneira ou outra. E suponha que 
eu tinha dado cabo de uma dúzia de capitalistas. Em que vinha isso tudo dar, e 
resumo? Com a minha liquidação, ainda que não por morte, mas por simples 
prisão ou degredo, a causa anarquista pedia um elemento de combate; e os 
doze capitalistas, que eu teria estendido, não eram doze elementos que a 
sociedade burguesa tinha perdido, porque os elementos componentes da 
sociedade burguesa não são elementos de combate, mas elementos puramente 
passivos, pois o “combate” está, não nos membros da sociedade burguesa, 
mas no conjunto de ficções sociais, em que essa sociedade assenta. Ora as 
ficções sociais não são gente, em quem se possa dar tiros... Você compreende 
bem? Não era como o soldado de um exército que mata doze soldados de um 
exército contrário; era como um soldado que mata doze civis da nação do 
outro exército. É matar estupidamente, porque não se elimina combatente 
nenhum... Eu não podia portanto pensar em destruir, nem no todo nem em 
nenhuma parte, ficções sociais. Tinha então que subjugá-las, que vencê-las 
subjugando-as, reduzindo-as à inatividade.» 
Apontou para mim o indicador direito súbito. 


— Foi o que eu fiz! 
Retirou logo o gesto, e continuou. 


— Procurei ver qual era a primeira, a mais importante, das ficções sociais. 
Seria a essa que me cumpria, mais que a nenhuma outra, tentar subjugar, 
tentar reduzir à inatividade. A mais importante, da nossa época pelo menos, é 
o dinheiro. Como subjugar o dinheiro, ou, em palavras mais precisas, a força, 
ou a tirania do dinheiro? Tornando-me livre da sua influência, da sua força, 
superior portanto à influência, reduzindo-o à inatividade pelo que me dizia 
respeito a mim. Pelo que me dizia respeito a mim, compreende V.?, porque eu 
é que o combatia; se fosse reduzi-lo à inatividade pelo que respeita a toda a 
gente, isso não seria já subjugá-lo, mas destrui-lo, porque seria acabar de todo 
com a ficção do dinheiro. Ora eu já lhe provei que qualquer ficção social só 
pode ser «destruída» pela revolução social, arrastada com as outras na queda 
da sociedade burguesa. 
«Como podia eu tornar-me superior à força do dinheiro? O processo mais 
simples era afastar-me da esfera da sua influência, isto é, da civilização; ir para 
um campo comer raízes e beber água das nascentes; andar nu e viver como 
animal. Mas isto, mesmo que não houvesse dificuldade em fazê-lo, não era 
combater uma ficção social; não era mesmo combater: era fugir. Realmente, 
quem se esquiva a travar um combate não é derrotado nele. Mas moralmente 
é derrotado, porque não se bateu. O processo tinha que ser outro


— um 
processo de combate e não de fuga. Como subjugar o dinheiro, combatendo
o? Como furtar-me à sua influência e tirania, não evitando o seu encontro? O 
processo era só um


— adquiri-lo, adquiri-lo em quantidades bastante para lhe 
não sentir a influência; e em quanto mais quantidade o adquirisse, tanto mais 
livre eu estaria dessa influência. Foi quando vi isto claramente, com toda a 
força da minha convicção de anarquista, e toda a minha lógica de homem 
lúcido, que entrei na fase atual


— a comercial e bancária, meu amigo


— do 
meu anarquismo.» 
Descansou um momento da violência, novamente crescente, do seu 
entusiasmo pela sua exposição. Depois continuou, ainda com um certo calor, 
a sua narrativa. 


— Ora você lembrasse daquelas duas dificuldades lógicas que eu lhe disse 
que me haviam surgido na princípio da minha carreira de anarquista 
consciente?... E você lembra-se de eu lhe dizer que naquela altura as resolvi 
artificialmente pelo sentimento e não pela lógica? Isto é, você mesmo notou e 
muito bem, que eu não as tinha resolvido pela lógica... 


— Lembro-me, sim... 


— E você lembra-se de eu lhe dizer que mais tarde, quando acertei por fim 
com o verdadeiro processo anarquista, as resolvi então de vez, isto é, pela 
lógica? 


— Sim. 


— Ora veja como ficaram resolvidas... As dificuldades eram estas: não é 
natural trabalhar por qualquer coisa, seja o que for, sem uma compensação 
natural, isto é, egoísta; e não é natural dar o nosso esforço a qualquer fim sem 
ter a compensação de saber que esse fim se atinge. As duas dificuldades eram 
estas; ora repare como ficam resolvidas pelo processo de trabalho anarquista 
que o meu raciocínio me levou a descobrir como sendo o único verdadeiro... 
O processo dá em resultado eu enriquecer; portanto, compensação egoísta. O 
processo visa ao conseguimento da liberdade; ora eu, tornando-me superior à 
força do dinheiro, isto é, libertando-me dela, consigo liberdade. Consigo 
liberdade só para mim, é certo; mas é que como já lhe provei, a liberdade para 
todos só pode vir com a destruição das ficções sociais, pela revolução social. 
O ponto concreto é este: viso liberdade, consigo liberdade: consigo a 
liberdade que posso... E veja V.: à parte o raciocínio que determina este 
processo anarquista como o único verdadeiro, o fato que ele resolve 
automaticamente as dificuldades lógicas, que se podem opor a qualquer 
processo anarquista, mais prova que ele é o verdadeiro. 
«Pois foi este o processo que eu segui. Meti ombros à empresa de subjugar 
a ficção dinheiro, enriquecendo. Consegui. Levou um certo tempo, porque a 
luta foi grande, mas consegui. Escuso de lhe contar o que foi e o que tem sido 
a minha vida comercial e bancária. Podia ser interessante, em certos pontos 
sobretudo, mas já não pertence ao assunto. Trabalhei, lutei, ganhei dinheiro; 
trabalhei mais, lutei mais, ganhei mais dinheiro; ganhei muito dinheiro por 
fim. Não olhei o processo


— confesso-lhe, meu amigo, que não olhei o 
processo; empreguei tudo quanto há


— o açambarcamento, o sofisma 
financeiro, a própria concorrência desleal. O quê?! Eu combatia as ficções 
sociais, imorais e antinaturais por excelência, e havia de olhar a processos?! Eu 
trabalhava pela liberdade, e havia de olhar as armas com que combatia a 
tirania?! O anarquista estúpido, que atira bombas e dá tiros, bem sabe que 
mata, e bem sabe que as suas doutrinas não incluem a pena de morte. Ataca 
uma imoralidade com um crime, porque acha que essa imoralidade pede um 
crime para se destruir. Ele é estúpido quanto ao processo, porque, como já lhe 
mostrei, esse processo é errado e contraproducente como processo anarquista; 
agora quanto à moral do processo ele é inteligente. Ora o meu processo estava 
certo, e eu servia-me legitimamente, como anarquista, de todos os meios para 
enriquecer. Hoje realizei o meu limitado sonho de anarquista prático e lúcido. 
Sou livre. Faço o que quero, dentro, é claro, do que é possível fazer. O meu 
lema de anarquista era a liberdade; pois bem, tenho a liberdade, a liberdade 
que, por enquanto, na nossa sociedade imperfeita, é possível ter. Quis 
combater as forças sociais; combati-as, e, o que é mais, venci-as.» 


— Alto lá! Alto lá! disse eu. Isso estará tudo muito bem, mas há uma coisa 
que você não viu. As condições do seu processo eram, como você provou, 
não só criar liberdade, mas também não criar tirania. Ora você criou tirania 
você como açambarcador, como banqueiro, como financeiro sem escrúpulos 


— você desculpe, mas você é que disse


—, você criou tirania. Você criou 
tanta tirania como qualquer outro representante das ficções sociais, que você 
diz que combate. 


— Não, meu velho, você engana-se. Eu não criei tirania. A tirania, que 
pode ter resultado da minha ação de combate contra as ficções sociais, é uma 
tirania que não parte de mim, que portanto eu não criei; está nas ficções 
sociais, eu não ajuntei a elas. Essa tirania é a própria tirania das ficções sociais; 
e eu não podia, nem me propus, destruir as ficções sociais. Pela centésima vez 
lhe repito: só a revolução social pode destruir as ficções sociais; antes disso, a 
ação anarquista perfeita, como a minha, só pode subjugar as ficções sociais, 
subjugá-las em relação só ao anarquista que põe esse processo em prática, 
porque esse processo não permite uma mais larga sujeição dessas ficções. Não 
é de não criar tirania que se trata: é de não criar tirania nova, tirania onde não 
estava. Os anarquistas, trabalhando em conjunto, influenciando-se uns aos 
outros como eu lhe disse, criam entre si, fora e à parte das ficções sociais, uma 
tirania; essa é que é uma tirania nova. Essa, eu não a criei. Não a podia mesmo 
criar, pelas próprias condições do meu processo. Não, meu amigo; eu só criei 
liberdade. Libertei um. Libertei-me a mim. É que o meu processo, que é, 
como lhe provei, o único verdadeiro processo anarquista, me não permitiu 
libertar mais. O que pude libertar, libertei. 


— Está bem... Concordo... Mas olhe que, por esse argumento, a gente 
quase que é levado a crer que nenhum representante das ficções sociais exerce 
a tirania... 


— E não exerce. A tirania é das ficções sociais e não dos homens que as 
encarnam; esses são, por assim dizer, os meios de que as ficções se servem 
para tiranizar, como a faca é o meio que se pode servir o assassino. E você 
decerto não julga que abolindo as facas abole os assassinos... Olhe... Destrua 
você todos os capitalistas do mundo, mas sem destruir o capital... No dia 
seguinte o capital, já nas mãos de outros, continuará, por meio desses, a sua 
tirania. Destrua, não os capitalistas, mas o capital; quantos capitalistas ficam?... 
Vê?... 


— Sim; você tem razão. 


— Ó filho, o máximo, o máximo, o máximo que você me pode acusar de 
fazer é de aumentar um pouco


— muito muito pouco


— a tirania das ficções 
sociais. O argumento é absurdo, porque como já lhe disse, a tirania que eu não 
devia criar, e não criei, é outra. Mas tem mais um ponto fraco: é que, pelo 
mesmo raciocínio, você pode acusar um general, que trava combate pelo seu 
país, de causar ao seu país o prejuízo do número de homens do seu próprio 
exercito que teve que sacrificar para vencer. Quem vai à guerra, dá e leva. 
Consiga-se o principal; o resto... 


— Está muito bem... Mas olhe lá outra coisa... O verdadeiro anarquista 
quer a liberdade não só para si, mas também para os outros... Parece-me que 
quer a liberdade para a humanidade inteira... 


— Sem dúvida. Mas eu já lhe disse que, pelo processo que descobri que era 
o único processo anarquista, cada um tem de libertar-se a si próprio. Eu 
libertei-me a mim; fiz o meu dever simultaneamente pra comigo e para com a 
liberdade. Por que é que os outros, os meus camaradas, não fizeram o 
mesmo? Eu não os impedi. Esse é que teria sido o crime, se os tivesse 
impedido. Mas eu nem sequer os impedi ocultando-lhes o verdadeiro 
processo anarquista; logo que descobri o processo, disse-o claramente a todos. 
O próprio processo me impedia de fazer mais. Que mais podia fazer? 
Compeli-los a seguir o caminho? Mesmo que o pudesse fazer, não o faria, 
porque seria tirar-lhes a liberdade, e isso era contra os meus princípios 
anarquistas. Auxiliá-los? Também não podia ser, pela mesma razão. Eu nunca 
ajudei, nem ajudo, ninguém, porque isso, sendo diminuir a liberdade alheia, é 
também contra os meus princípios. Você o que me está censurando é eu não 
ser mais gente que uma pessoa só. Por que me censura o cumprimento do 
meu dever de libertar, até onde eu o podia cumprir? Por que não os censura 
antes a eles por não terem cumprido o deles? 


— Pois sim, homem. Mas esses homens não fizeram o que você fez, 
naturalmente, porque eram menos inteligentes que V., ou menos fortes de 
vontade, ou... 


— Ah, meu amigo: essas são já as desigualdades naturais, e não sociais... 
Com essas é que o anarquismo não tem nada. O grau de inteligência ou de 
vontade de um indivíduo é com ele e com a Natureza; as próprias ficções 
sociais não põem para aí nem prego nem estopa. Há qualidade naturais, como 
eu já lhe disse, que se pode presumir que sejam pervertidas pela longa 
permanência da humanidade entre ficções sociais; mas a perversão não está no 
grau da qualidade, que é absolutamente dado pela Natureza, mas na aplicação 
da qualidade. Ora uma questão de estupidez ou de falta de vontade não tem 
que ver com a aplicação dessas qualidade, mas só com o grau delas. Por isso 
lhe digo: essas são já absolutamente as desigualdades naturais, e sobre essas 
ninguém tem poder nenhum, nem há modificação social que a modifique, 
como não me pode tornar a mim alto ou a você baixo... 
«A não ser... A não ser que, no caso desses tipos, a perversão hereditária das 
qualidades naturais vá tão longe que atinja o próprio fundo do 
temperamento... Sim, que um tipo nasça para escravo, nasça naturalmente 
escravo, e portanto incapaz de qualquer esforço no sentido de se libertar... 
Mas nesse caso..., nesse caso..., que têm eles que ver com a sociedade livre, ou 
com a liberdade?... Se um homem nasceu para escravo, a liberdade, sendo 
contrária à sua índole, será para ele uma tirania» 
Houve uma pequena pausa. De repente ria alto. 


— Realmente, disse eu, você é anarquista. Em todo o caso, dá vontade de 
rir, mesmo depois de o ter ouvido, compara o que você é com o que são os 
anarquistas que para aí há... 


— Meu amigo, eu já lho disse, já lho provei, e agora repito-lho... A 
diferença é só esta: eles são anarquistas só teóricos, eu sou teórico e prático; 
eles são anarquistas místicos, e eu científico; eles são anarquistas que se 
agacham, eu sou um anarquista que combate e liberta... Em uma palavra: eles 
são pseudo-anarquistas, e eu sou anarquista. E levantamo-nos da mesa! 
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)