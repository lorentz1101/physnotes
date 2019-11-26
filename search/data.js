var data = [
{
url: "/qft/dummy/",
title: "基本事項",
body: "基本事項"
},
{
url: "/relativity/1-basis/",
title: "基本事項",
body: "基本事項 特殊相対性理論 特殊相対性理論では次の仮定の下で議論を進めた。 光速不変原理 光速$c$は任意の慣性系において一定 (特殊)相対性原理 任意の慣性系で物理法則は同じ形で表される。 舞台: Minkowski空間 計量$(\\eta_{\\mu^nu})=\\diag(-1,1,1,1)$ (疑)Riemman多様体 問題は重力理論が構成できないことと，慣性系の上でしか議論できないこと。 一般相対性理論 (一般)相対性原理 任意の座標系で物理法則は同じ数学的形式で表せる。 等価原理 一様な重力場中の慣性系と無重力の加速系は区別できない。 重力場中でも任意の点で適当な座標系をとれば無重力にすることができる。 局所的には特殊相対論が成立する座標系が存在する。このような座標系を局所Lorentz系と呼ぶ。"
},
{
url: "/rqm/1.-naturalunit/",
title: "自然単位系",
body: "自然単位系 単位系 物理量を表す尺度となる単位系には，主に使われるものとして，SI単位系や，cgs-gauss単位系がある。 これらの単位系は人間的な都合から作られた尺度を採用している。 例えば長さの単位であるメートルは「地球の子午線全周の4千万分の1」が元来の定義である。また，質量の単位であるグラムは，「水1mlの体積」が定義である。 これらに対して，人間的な尺度を用いず，普遍的な物理定数を用いて定義された単位系を自然単位系と呼ぶ。 普遍的な物理定数 普遍的な物理定数には次のようなものがある。 まず光速度$c$である。相対論によると，特殊相対論が成り立つ系（局所Lorentz系）において，速さの上限となる定数である。 次に量子論の基本定数となる換算プランク定数（ディラック定数）$\\hbar$である。換算プランク定数は，プランク定数を$2\\pi$で割った定数で，Schrödinger方程式にも顔を出す量子力学の基本的な定数である。 この他にも普遍的な定数には万有引力定数$G$や真空中の誘電率$\\epsilon_0$，Boltzmann定数$k_B$などがある。 自然単位系 これらの不変的な定数を単位量とすることにより，すなわち$1$ととることにより作られた単位系を自然単位系と呼ぶ。 特にここでは量子論，相対論それぞれの基本的な定数である$c$と$\\hbar$を基本単位とする単位系を考える。 力学的な次元には時間$[\\mathrm{T}]$，長さ$[\\mathrm{L}]$，質量$[\\mathrm{M}]$の三つの次元がある。それぞれの物理定数が持つ次元は，$c$が$[\\mathrm{LT}^{-1}]$，$\\hbar$が$[\\mathrm{ML^2T}^{-1}]$である。 これらの物理定数を$1$としたことにより，力学的な物理量は全て1つの単位で測ることができる。 すなわち，$c=1$ととったので光速度によって時間と距離の尺度が統一される。すなわち，形式的には $$\r\\mathrm{LT^{-1}=1\r\\Longleftrightarrow\rL=T}\r$$\rとなり，これらは同じ単位により測ることができる。また，$\\hbar=1$ととったので $$\r\\mathrm{ML^2T}^{-1}=1\r\\Longleftrightarrow\r\\mathrm{L=T=M^{-1}}\r$$\rとなる。よって質量$[\\mathrm{M}]$を含めて全ての物理定数が同じ単位で測ることができる。 このような単位系をとることで，煩雑な係数を減らし，式をシンプルに表現することができる。また，普遍的な定数の「次元の違う物理量の換算係数としての役割」を反映することができる。 ただし，相対論的効果の無視できるような極限$c\\to\\infty$や量子論的効果の無視できる極限$\\hbar\\to0$をとるときはこれらの係数を復活させねばならない。 この時は式に登場する各物理量の次元がわかれば次元解析を行うことにより係数を一意に定め復活させることが可能である。"
},
{
url: "/rqm/2-krain-gordon/",
title: "クライン・ゴルドン方程式",
body: "クライン・ゴルドン方程式 自由粒子のSchrödinger方程式の導出 非相対論的な自由粒子のエネルギーは $$\rE=\\frac{\\symbf{p}^2}{2m}\r$$\rである。 $$\rE \\longrightarrow i \\hbar \\frac{\\partial}{\\partial t} \\quad p \\longrightarrow \\frac{\\hbar}{i} \\nabla\r$$\rと対応しているので $$\ri\\hbar\\frac{\\partial\\psi(\\symbf{r},t)}{\\partial t}=-\\frac{\\hbar^2}{2m}\\nabla^2\\psi(\\symbf{r},t)\r$$\rとなり，Schrödinger方程式が得られる。 クライン・ゴルドン方程式の導出 同様の操作を相対論的な方程式 $$\rp^\\mu p_\\mu=m^2c^2\r$$\rに対して施すことを考える。 $$\rp^\\mu\\to -\\hbar\\partial^\\mu\r$$\rと変換すると $$\r\\left(\\partial^\\mu\\partial_\\mu+\\frac{m^2c^2}{\\hbar^2}\\right)\\phi(x)=0\r$$\rである。この式をクライン・ゴルドン方程式と呼ぶ。 ダランベルシアン$\\square:=\\partial^\\mu\\partial_\\mu$を用いて $$\r\\left(\\square+\\frac{m^2c^2}{\\hbar^2}\\right)\\phi(x)=0\r$$\rと表記することもある。 クライン・ゴルドン方程式の諸性質 ローレンツ変換に対して不変であること $\\square=\\partial^\\mu\\partial_\\mu$はスカラーであり，$m^2c^2/\\hbar^2$も明らかにスカラーであるから，クライン・ゴルドン方程式はローレンツ変換に対して不変である。 確率解釈ができないこと Schrödinger方程式のときと同様に，連続の式を導出することを考える。 クライン・ゴルドン方程式の両辺に$\\phi^\\star$をかけたものから，クライン・ゴルドン方程式の両辺複素共役をとってから$\\phi$をかけたものを引くと \\begin{align*}\r\u0026\\phi^\\star(x)\\partial^\\mu\\partial_\\mu\\phi(x)\r-\\phi(x)\\partial^\\mu\\partial_\\mu\\phi^\\star(x)=0\\\\\r\\Longleftrightarrow\\quad\r\u0026\\partial^\\mu(\\phi^\\star(x)\\partial_\\mu\\phi(x)\r-\\phi(x)\\partial_\\mu\\phi^\\star(x))=0\r\\end{align*}\rであり，連続の式となっている。 次元と実数性を加味すると，確率密度$\\rho$と確率の流れ$\\symbf{j}$は \\begin{align*}\r\\rho\u0026=\\frac{i\\hbar}{2mc^2}\\left(\\phi^\\star\\frac{\\partial}{\\partial t}\\phi-\\phi\\frac{\\partial}{\\partial t}\\phi^\\star\\right)\\\\\r\\symbf{j}\u0026=-\\frac{i\\hbar}{2m}(\\phi^\\star\\nabla\\phi-\\phi\\nabla\\phi^\\star)\r\\end{align*}\rとなる。ゆえに$\\rho$の正値性が保証されないため，これを確率密度と解釈するのは不可能である。 $\\rho$には時間微分が含まれている。$\\rho$の正値性が保証されないことは時間に関して2階微分であることに起因している。 負のエネルギー解の存在 $$\rp^\\mu p_mu=\\frac{E^2}{c^2}-\\symbf{p}^2\r$$\rであるから $$\rE=\\pm\\sqrt{m^2c^4+c^2\\symbf{p}^2}\r$$\rと正負のエネルギー2つがついになって存在する。 このことに起因して，負のエネルギーが解として存在してしまう。 このような問題点を解決するために，次項で扱うディラック方程式が考えられた。"
},
{
url: "/relativity/2-tensor1/",
title: "計量テンソル",
body: "計量テンソル 計量テンソル 任意の座標系$S$系$x^\\mu$と局所Lorentz系$S^\\prime$系$x^{\\mu\\prime}$について， $x^\\prime=f^\\prime(x)$という関係があるとする。 各$f^\\mu$は独立でなくてはならないので，ヤコビアン $$\r\\frac{\\partial (x')}{\\partial (x)}\\neq 0\r$$\rでなくてはならない。ゆえにこのとき$h\\equiv f^{-1}$が存在して $$\rx=h(x')\r$$\rとなる。 2点$x^\\alpha,x^\\beta$について，二点間の距離は$S\u0026rsquo;$系で $$\r\\Delta s^2 =\\eta_{\\alpha\\beta}(x^{\\alpha\\prime}-x^{\\alpha\\prime})(x^{\\beta\\prime}-x^{\\beta\\prime})\r$$\rである。ただし$(\\eta_{\\mu\\nu})=\\diag(-1,1,1,1)$である。 $x^\\alpha,x^\\beta$が十分近ければ，線素の二乗は$S$系において $$\rds^2 =\\eta_{\\alpha\\beta}dx^\\alpha dx^\\beta\r$$\rとできる。 ここで，$S\u0026rsquo;$系への変換を考えると $$\rdx^{\\mu\\prime}=\\frac{\\partial x^{\\mu\\prime}}{\\partial x^{\\nu}}dx^\\nu\r$$\rであるから $$\rds^2=\\eta_{\\alpha\\beta}\\frac{\\partial x^{\\alpha\\prime}}{\\partial x^{\\mu}}\\frac{\\partial x^{\\beta\\prime}}{\\partial x^{\\nu}}dx^\\mu dx^\\nu\r$$\rである。ゆえにここで計量\u0026rdquo;テンソル\u0026rdquo;$g(x)$を $$\rg_{\\mu\\nu}(x)=\\eta_{\\alpha\\beta}\\frac{\\partial x^{\\alpha\\prime}}{\\partial x^{\\mu}}\\frac{\\partial x^{\\beta\\prime}}{\\partial x^{\\nu}}\r$$\rと定義して $$\rds^2=g_{\\mu\\nu}(x)dx^\\mu dx^\\nu\r$$\rとする。 計量テンソルの変換則 2つの座標系$S$系，$S\u0026rsquo;$系間にも同様に $$\rdx^{\\mu\\prime}=\\frac{\\partial x^{\\mu\\prime}}{\\partial x^{\\nu}}dx^\\nu\r$$\rが成り立つから $$\rg_{\\mu\\nu}(x)=g_{\\alpha\\beta}^\\prime(x)\\frac{\\partial x^{\\alpha\\prime}}{\\partial x^{\\mu}}\\frac{\\partial x^{\\beta\\prime}}{\\partial x^{\\nu}}\r$$\rである。 後に述べる通り，この変換則ゆえに計量テンソルをテンソルと呼ぶ。"
},
{
url: "/relativity/3-tensor2/",
title: "スカラー・ベクトル・テンソル",
body: "スカラー・ベクトル・テンソル スカラー 座標系$S$と$S\u0026rsquo;$である1点において観測した物理量がそれぞれ$A,A\u0026rsquo;$であったとする。 これらの量が座標変換によらないとき，すなわち $$\rA=A'\r$$\rであるとき，$A$はスカラーであるという。 また，このような物理量が位置に依存するとき，すなわち任意の$x,x\u0026rsquo;$において$A=A(x),A\u0026rsquo;=A\u0026rsquo;(x)$であるとき，$A(x)$はスカラー場であるという。 ベクトル 座標系$S$と$S\u0026rsquo;$である一点において観測した4つの物理量の組がそれぞれ$A^\\mu,A^{\\mu\\prime}$であったとする。 このとき $$\rA^{\\mu\\prime}=\\frac{\\partial x^{\\mu\\prime}}{\\partial x^\\nu}A^\\nu\r$$\rというような変換則にしたがうものを反変ベクトルと呼ぶ。また，このような物理量が位置に依存するとき，すなわち任意の$x,x\u0026rsquo;$において$B=B(x),B\u0026rsquo;=B\u0026rsquo;(x\u0026rsquo;)$であるとき，$B(x)$は反変ベクトル場であるという。 一方，物理量が座標系$S$と$S\u0026rsquo;$で$B^\\mu,B^{\\mu\\prime}$であったとして $$\rB_{\\mu}^{\\prime}=\\frac{\\partial x^{\\nu}}{\\partial x^{\\mu\\prime}}A^\\nu\r$$\rというような変換則にしたがう物を，共変ベクトルという。また，このような物理量が位置に依存するとき，すなわち任意の$x,x\u0026rsquo;$において$B=B(x),B\u0026rsquo;=B\u0026rsquo;(x\u0026rsquo;)$であるとき，$B(x)$は共変ベクトル場であるという。 テンソル 3階のテンソルを例にとって説明する。 座標系$S$と$S\u0026rsquo;$である一点において観測した$4^3$個の物理量の組がそれぞれ$T_{\\hphantom{\\lambda}\\mu\\nu}^\\lambda$，$T_{\\hphantom{\\lambda}\\mu\\nu}^{\\lambda\\hphantom{\\mu\\nu}\\prime}$であったとする。このとき $$\rT^{\\lambda\\hphantom{\\mu\\nu}\\prime}_{\\hphantom{\\lambda}\\mu\\nu}\r=\\frac{\\partial x^{\\lambda\\prime}}{\\partial x^{\\alpha}}\r\\frac{\\partial x^{\\beta}}{\\partial x^{\\mu\\prime}}\r\\frac{\\partial x^{\\gamma}}{\\partial x^{\\mu\\nu}}\rT^\\lambda_{\\hphantom{\\alpha}\\beta\\gamma}\r$$\rという変換則があるとき，これを3階混合テンソルと呼ぶ。混合とついているのは上付き添字と下付き添字が混合しているからである。もし添字が上付きだけなら反変テンソル，下付きだけなら共変テンソルと呼ぶ。 また，一般に添字が$n$個のテンソルを$n$階のテンソルと呼ぶ。 前項の$g_{\\mu\\nu}$のように添字を入れ替えても成分の値が変わらない，すなわち $$\rg_{\\mu\\nu}(x)=g_{\\nu\\mu}(x)\r$$\rを満たすような2階のテンソルを対称テンソルという。 一般に$n$個の添字をどのように入れ替えても成分の値が変わらないようなテンソルを完全対称テンソルという。 同様に，2階テンソル$f_{\\mu\\nu}$について $$\rf_{\\mu\\nu}(x)=-f_{\\nu\\mu}(x)\r$$\rを満たすとき，反対称テンソルという。 また，$n$この添字の順序の置換に対して，偶置換なら下の値に等しく，奇置換なら元の逆符号の値になるようなテンソルを完全反対称テンソルという。"
},
{
url: "/rqm/3-dirac/",
title: "ディラック方程式",
body: "ディラック方程式 ディラック方程式 前項で述べた通り，クライン・ゴルドン方程式は時間に関して2階の微分方程式であることが問題であった。そこで，時間に関して1階の微分方程式となるような方程式があればよい。 また，ローレンツ変換に対する共変性を考えると，時間に関して一階の微分方程式であれば空間に関しても1階の微分方程式であるべきである。 ゆえに次のような方程式を仮定する。 $$\r\\left(\\frac{1}{c}\\frac{\\partial}{\\partial t}+\\symbf{\\alpha}\\cdot\\nabla+i\\beta\\frac{mc}{\\hbar}\\right)\\psi(x)=0\r$$\rここで，これを \\begin{align*}\r\u0026\\left(\\frac{1}{c^2}\\frac{\\partial^2}{\\partial t^2}-\\nabla^2+\\left(\\frac{mc}{\\hbar}\\right)^2\\right)\\\\\r=\u0026\\left(\\frac{1}{c}\\frac{\\partial}{\\partial t}+\\symbf{\\alpha}\\cdot\\nabla+i\\beta\\frac{mc}{\\hbar}\\right)\r\\left(\\frac{1}{c}\\frac{\\partial}{\\partial t}-\\symbf{\\alpha}\\cdot\\nabla-i\\beta\\frac{mc}{\\hbar}\\right)\r\\end{align*}\rのように，クライン・ゴルドン方程式を因数分解したものだと考える。 このような関係式が満たされれば，方程式の解はクライン・ゴルドン方程式の解にもなっており，相対論的なエネルギーの関係式を満たすこととなる。 これが成り立つためには \\begin{gather*}\r\u0026\\alpha^i\\alpha^j+\\alpha^j\\alpha^i=2\\delta^{ij}\r\\\\\r\u0026\\alpha^i\\beta+\\beta\\alpha^i=0\r\\\\\r\u0026\\beta^2=1\r\\end{gather*}\rの3式を満たさねばならない。これを満たすような実数$\\alpha^i,\\beta$は存在しない。よってこれを行列と考え，波動関数が複数の成分を持っているものと考えられる。これはスピンに対応している。"
},
{
url: "/relativity/4-tensor3/",
title: "テンソルの等式",
body: "テンソルの等式 テンソルの等式 二つのテンソル場 $A^{\\lambda}_{\\hphantom{\\lambda}\\mu\\nu}(x),B^{\\lambda}_{\\hphantom{\\lambda}\\mu\\nu}(x)$に対して，全ての$\\lambda,\\mu,\\nu$で \\begin{equation}\rA^{\\lambda}_{\\hphantom{\\lambda}\\mu\\nu}(x)=B^{\\lambda}_{\\hphantom{\\lambda}\\mu\\nu}(x)\r\\end{equation}\rが成り立っているとき，$A^{\\lambda}_{\\hphantom{\\lambda}\\mu\\nu}(x)$と$B^{\\lambda}_{\\hphantom{\\lambda}\\mu\\nu}(x)$は等しいという。 テンソルの等式の両辺には，同じ階数の，同じ添字の組を持つ，同じ点でのテンソルが来なくてはならない。すなわち \\begin{equation}\rA^{\\lambda}_{\\hphantom{\\lambda}\\mu\\nu}(x)=\rB_{\\lambda}^{\\hphantom{\\lambda}\\mu\\nu}(x)\r\\end{equation}\rや，$x\\neq y$に対して \\begin{equation}\rA^{\\lambda}_{\\hphantom{\\lambda}\\mu\\nu}(x)=\rB^{\\lambda}_{\\hphantom{\\lambda}\\mu\\nu}(y)\r\\end{equation}\rは全く無意味な等式である。なぜならこの関係式は座標変換により崩れてしまうからである。 実際，$x\u0026rsquo;$系への座標変換を考えると $$\rA^{\\lambda\\hphantom{\\mu\\nu}\\prime}_{\\hphantom{\\lambda}\\mu\\nu}(x')=\\frac{\\partial x^{\\lambda\\prime}}{\\partial x^{\\alpha}}\r\\frac{\\partial x^{\\beta}}{\\partial x^{\\mu\\prime}}\r\\frac{\\partial x^{\\gamma}}{\\partial x^{\\mu\\nu}}\rA^{\\alpha}_{\\hphantom{\\alpha}\\beta\\gamma}(x)\r$$\rであるから$(2)$は， $$\rA^{\\lambda\\hphantom{\\mu\\nu}\\prime}_{\\hphantom{\\lambda}\\mu\\nu}(x')=\r\\frac{\\partial x^{\\lambda\\prime}}{\\partial x^{\\alpha}}\r\\frac{\\partial x^{\\beta}}{\\partial x^{\\mu\\prime}}\r\\frac{\\partial x^{\\gamma}}{\\partial x^{\\mu\\nu}}\rB_{\\alpha}^{\\hphantom{\\alpha}\\beta\\gamma}(x)\r$$\rとなる。$(\\text{右辺})\\neq B_{\\lambda}^{\\hphantom{\\lambda}\\mu\\nu\\prime}(x')$であるから，この式は座標変換により形を変えてしまい，一般相対性原理の要請に反する。 $(3)$も同様の操作をすることにより座標変換に不変でないことを示すことができる。 一方式$(1)$に同様の操作を施すと $$\rA^{\\lambda\\hphantom{\\mu\\nu}\\prime}_{\\hphantom{\\lambda}\\mu\\nu}(x')\r=B^{\\lambda\\hphantom{\\mu\\nu}\\prime}_{\\hphantom{\\lambda}\\mu\\nu}(x')\r$$\rが得られる。一般の$n$階テンソルに対してこの性質は保たれる。 このような性質を持つ等式のことを座標変換に対して共変であるという。このとき，$A,B$がテンソルであることがわかっていれば，等式が一般相対性原理を保っているかを心配する必要はなく，これがテンソルの便利な点である。"
},
{
url: "/relativity/5-tensor4/",
title: "テンソルの和と差",
body: "テンソルの和と差 テンソルの和と差 テンソルの和がテンソルであること 次の主張が成り立つ。 同種のテンソルの和\r$$\rC_{\\hphantom{\\lambda}\\mu\\nu}^{\\lambda}(x)=A^{\\lambda}_{\\hphantom{\\lambda}\\mu\\nu}(x)+B^{\\lambda}_{\\hphantom{\\lambda}\\mu\\nu}(x)\r$$\rもまたテンソルとなる。\r\r証明 $x$系から$x\u0026rsquo;$系への座標変換を考える。 $$\rC_{\\hphantom{\\alpha}\\beta\\gamma}^{\\alpha}(x)=A^{\\alpha}_{\\hphantom{\\alpha}\\beta\\gamma}(x)+B^{\\alpha}_{\\hphantom{\\alpha}\\beta\\gamma}(x)\r$$\rの両辺に $$\r\\frac{\\partial x^{\\lambda\\prime}}{\\partial x^{\\alpha}}\r\\frac{\\partial x^{\\beta}}{\\partial x^{\\mu\\prime}}\r\\frac{\\partial x^{\\gamma}}{\\partial x^{\\nu\\prime}}\r$$\rをかければ $$\rC_{\\hphantom{\\lambda}\\mu\\nu}^{\\lambda\\hphantom{\\mu\\nu}\\prime}(x)=A^{\\lambda\\hphantom{\\mu\\nu}\\prime}_{\\hphantom{\\lambda}\\mu\\nu}(x)+B^{\\lambda\\hphantom{\\mu\\nu}\\prime}_{\\hphantom{\\lambda}\\mu\\nu}(x)\r$$\rとなり成立。 差について $B^{\\lambda}_{\\hphantom{\\lambda}\\mu\\nu}(x)\\to -B^{\\lambda}_{\\hphantom{\\lambda}\\mu\\nu}(x)$と置き換えて同様の操作をすると \\begin{align*}\rC_{\\hphantom{\\lambda}\\mu\\nu}^{\\lambda}(x)\u0026=A^{\\lambda}_{\\hphantom{\\lambda}\\mu\\nu}(x)+(-B^{\\lambda}_{\\hphantom{\\lambda}\\mu\\nu}(x))\\\\\r\u0026=A^{\\lambda}_{\\hphantom{\\lambda}\\mu\\nu}(x)-B^{\\lambda}_{\\hphantom{\\lambda}\\mu\\nu}(x)\r\\end{align*}\rならば \\begin{align*}\rC_{\\hphantom{\\lambda}\\mu\\nu}^{\\lambda\\hphantom{\\mu\\nu}\\prime}(x)\u0026=A^{\\lambda\\hphantom{\\mu\\nu}\\prime}_{\\hphantom{\\lambda}\\mu\\nu}(x)+(-B^{\\lambda\\hphantom{\\mu\\nu}\\prime}_{\\hphantom{\\lambda}\\mu\\nu}(x))\\\\\r\u0026=A^{\\lambda\\hphantom{\\mu\\nu}\\prime}_{\\hphantom{\\lambda}\\mu\\nu}(x)-B^{\\lambda\\hphantom{\\mu\\nu}\\prime}_{\\hphantom{\\lambda}\\mu\\nu}(x)\r\\end{align*}\rが成り立ち，よってテンソルの差もまたテンソルとなる。 スカラー場との積 同様に座標変換を考えれば，テンソル$A^{\\lambda}_{\\hphantom{\\lambda}\\mu\\nu}(x)$とスカラー場$c_1(x)$の積$C^{\\lambda}_{\\hphantom{\\lambda}\\mu\\nu}(x)=c_1(x)A^{\\lambda}_{\\hphantom{\\lambda}\\mu\\nu}(x)$はテンソルである。よって，スカラー場$c_1(x),c_2(x)$を用いて $$\rC_{\\hphantom{\\lambda}\\mu\\nu}^{\\lambda\\hphantom{\\mu\\nu}\\prime}(x)=c_1(x)A^{\\lambda\\hphantom{\\mu\\nu}\\prime}_{\\hphantom{\\lambda}\\mu\\nu}(x)+c_2(x)B^{\\lambda\\hphantom{\\mu\\nu}\\prime}_{\\hphantom{\\lambda}\\mu\\nu}(x)\r$$\rもテンソルとなる。"
},
{
url: "/relativity/6-tensor5/",
title: "テンソルの積",
body: "テンソルの積 テンソルの積 テンソルの積がテンソルになること $$C_{\\hphantom{\\lambda}\\mu\\nu}^{\\lambda\\hphantom{\\mu\\nu}\\rho\\sigma}(x):=A^{\\lambda}_{\\hphantom{\\lambda}\\mu\\nu}(x)B^{\\rho\\sigma}(x)\r$$\rで定義した$C(x)$は添字の示す通りのテンソルとなる。実際，$\\lambda\\to\\alpha$，$\\mu\\to\\beta$，$\\nu\\to\\gamma$，$\\rho\\to\\delta$，$\\sigma\\to\\epsilon$としたのち $$\r\\left(\\frac{\\partial x^{\\lambda\\prime}}{\\partial x^{\\alpha}}\r\\frac{\\partial x^{\\beta}}{\\partial x^{\\mu\\prime}}\r\\frac{\\partial x^{\\gamma}}{\\partial x^{\\nu\\prime}}\\right)\\left(\\frac{\\partial x^{\\rho\\prime}}{\\partial x^{\\delta}}\r\\frac{\\partial x^{\\sigma\\prime}}{\\partial x^{\\epsilon}}\\right)\r$$\rを両辺にかければ，前のかっこは$A(x)$に，後ろのかっこは$B(x)$に作用し $$C\\_{\\hphantom{\\lambda}\\mu\\nu}^{\\lambda\\hphantom{\\mu\\nu}\\rho\\sigma\\prime}(x^\\prime):=A^{\\lambda\\hphantom{\\mu\\nu}\\prime}\\_{\\hphantom{\\lambda}\\mu\\nu}(x^\\prime)B^{\\rho\\sigma\\prime}(x^\\prime)\r$$\rとなる。このようなテンソルの積で表されたテンソル$C(x)$のことを$A(x)$，$B(x)$のテンソル積という。 特に全てのテンソルが1階であれば，すなわちベクトルであれば，これをベクトル積という。 テンソルを積に分解すること ここまでテンソルの積がまたテンソルとなることを見たが，逆に任意の$n$階のテンソルはどのように分解できるであろうか。 一般の$n$階のテンソルは$n$個のベクトルの積で表せるとは限らない。 これに関しては次の定理がある。 任意の$n$階の反変テンソル$T^{\\mu\\nu\\dots\\rho\\sigma}$は$n$個の反変ベクトル$A^\\mu,B^\\nu,\\dots,M^\\rho,N^\\sigma$のテンソル積の和として\r$$\rT^{\\mu\\nu\\dots\\rho\\sigma}=\\sum_{k=1}^m A_{\\hphantom{\\mu}(k)}^\\mu B^\\nu_{\\hphantom{\\nu}(k)},\\dots,M^\\rho_{\\hphantom{\\rho}(k)},N^\\sigma_{\\hphantom{\\sigma}(k)}\r$$\rと表せる。ただし$m$は$4^{n-1}$以下の正の整数。\r\r記号$(k)$は$k$番目の項に出てくるベクトルを意味している。 これを数学的帰納法で示す。$n=1$の時は $$\rT^\\mu=A^\\mu_{\\hphantom{\\mu}(1)}\r$$\rととれば成立。 $n-1$で成立すると仮定する。このとき$n$について考える。今，4個の$n-1$階のテンソル $$\rS^{\\mu\\nu\\dots\\rho (i)}=T^{\\mu\\nu\\dots\\rho i}(i=0,1,2,3)\r$$\rをとる。次に4個の反変ベクトル$N^\\sigma_{\\hphantom{\\sigma}(i)}$を$x$系で $$\rN^\\sigma_{\\hphantom{\\sigma}(i)}=\\delta^\\sigma_{\\hphantom{\\sigma}i}\r$$\rで定義する。このとき$x$系で $$\rT^{\\mu\\nu\\dots\\rho\\sigma}=\\sum_{i=0}^3S^{\\mu\\nu\\dots\\rho (i)}N^\\sigma_{\\hphantom{\\sigma}(i)}\r$$\rが成り立つ。右辺は$n-1$階と1階のテンソルの積の和となっているから，左辺は$n$階のテンソルである。このように$n$において$T(x)$が構成できた。"
},
{
url: "/search/data.js",
title: "",
body: ""
},
];