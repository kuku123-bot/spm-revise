window.EN=window.EN||{};
EN.math=[
{t:'Functions and Quadratic Equations in One Variable',n:[
['General form',['Quadratic function: **f(x) = ax² + bx + c**, a ≠ 0','Quadratic equation: **ax² + bx + c = 0**']],
['Methods of solving',['**Factorisation** – find two factors, set each equal to 0','**Formula**: x = (−b ± √(b² − 4ac)) / 2a','**Completing the square**: write as a(x − p)² + q']],
['Types of roots (discriminant b² − 4ac)',['b² − 4ac **> 0** → two different real roots','b² − 4ac **= 0** → two equal real roots','b² − 4ac **< 0** → no real roots']],
['Sum & product of roots',['Sum of roots = **−b/a**','Product of roots = **c/a**']],
['Graph of a quadratic function',['a > 0 → U-shape, has a **minimum**; a < 0 → ∩-shape, has a **maximum**','**Axis of symmetry**: x = −b/2a','f(x) = a(x − p)² + q → **turning point (vertex)** is (p, q)','y-intercept = c']]],
q:[
['The roots of the equation x² − 5x + 6 = 0 are',0,0],
['The value of the discriminant of 2x² − 3x + 5 = 0 is',0,0],
['The sum of the roots of 2x² − 7x + 3 = 0 is',0,0],
['The equation of the axis of symmetry of y = x² − 6x + 5 is',0,0],
['The value of k so that x² + kx + 9 = 0 has two equal roots is',0,0],
['The minimum value of f(x) = x² − 4x + 7 is',0,0]]},
{t:'Number Bases',n:[
['Concept',['Number bases: 2, 5, 8, 10, etc. Place values for base n: …n³, n², n¹, n⁰','Base 2 uses only digits 0 and 1']],
['Conversion',['**Base n → base 10**: expand by place value. 1101₂ = 8 + 4 + 0 + 1 = 13','**Base 10 → base n**: divide repeatedly by n, read remainders from **bottom to top**','Base 2 ↔ base 8 ↔ base 4: group the digits (3 binary digits = 1 octal digit)']],
['Operations',['Add & subtract in the same base; remember 1 + 1 = 10 in base 2','Convert to base 10 if unsure, then convert back']]],
q:[
['1101₂ is equal to which base 10 number',0,0],['25 in base 10 converted to base 2 is',0,0],['345₈ converted to base 10 is',0,0],['1011₂ + 110₂ =',0,0],['The value of the digit 3 in 2301₄ is',0,0],['213₅ is equal to which base 10 number',0,0]]},
{t:'Logical Reasoning',n:[
['Statements',['A **statement** = a sentence that can be true or false (questions & commands are NOT statements)','**Negation** (~p): true becomes false and vice versa','Quantifiers: **all** ↔ **some / at least one**. The negation of "all" is "some … not"']],
['Operations',['**and**: true only if both are true','**or**: false only if both are false']],
['Implication',['"If p, then q": antecedent = p, consequent = q','**Converse**: If q, then p','**Inverse**: If ~p, then ~q','**Contrapositive**: If ~q, then ~p (same truth value as the original)','"p if and only if q" = two implications']],
['Arguments',['**Deductive** – general → specific (Forms I, II, III). An argument is **valid** if true premises ⇒ true conclusion','**Inductive** – specific → general (find a pattern; the conclusion may be false)']]],
q:[
['The negation of "All prime numbers are odd numbers" is',['No prime number is an odd number','Some prime numbers are not odd numbers','All prime numbers are not odd numbers','Some odd numbers are prime numbers'],0],
['"p and q" is true when',['p is true only','q is true only','both p and q are true','p or q is true'],0],
['The converse of "If x > 3, then x > 1" is',['If x > 1, then x > 3','If x ≤ 3, then x ≤ 1','If x ≤ 1, then x ≤ 3','If x > 3, then x ≤ 1'],0],
['The contrapositive of "If p, then q" is',['If q, then p','If ~p, then ~q','If ~q, then ~p','If p, then ~q'],0],
['Premise 1: All students are club members. Premise 2: Aina is a student. Conclusion:',['Aina is not a club member','Aina is a club member','All club members are students','Some students are not members'],0],
['A sequence: 3, 7, 11, 15, … The 20th term is',0,0]]},
{t:'Operations on Sets',n:[
['Symbols',['**A ∩ B** intersection (in both)','**A ∪ B** union (in A or B or both)','**A′** complement (in ξ but not in A)','**A ⊂ B** A is a subset of B; **∅** empty set']],
['Formulae',['**n(A ∪ B) = n(A) + n(B) − n(A ∩ B)**','n(A′) = n(ξ) − n(A)','De Morgan: (A ∪ B)′ = A′ ∩ B′; (A ∩ B)′ = A′ ∪ B′']],
['Venn diagrams',['Fill in numbers from the **intersection** first, then the other parts','Outside the circles = (A ∪ B)′']]],
q:[['n(A) = 12, n(B) = 9 and n(A ∩ B) = 4. The value of n(A ∪ B) is',0,0],['A = {1,2,3,4}, B = {3,4,5}. A ∩ B =',0,0],['n(ξ) = 30 and n(A) = 18. n(A′) =',0,0],['(A ∪ B)′ is equal to',0,0],
['Of 40 pupils, 25 like Mathematics, 20 like Science and 8 like both. The number who like neither is',0,0],['A ⊂ B means',['A ∪ B = A','A ∩ B = B','A ∪ B = B','A′ = B'],0]]},
{t:'Networks in Graph Theory',n:[
['Terms',['**Vertex** (point), **edge** (connecting line)','**Degree of a vertex** = number of edges at that vertex','**Sum of degrees = 2 × number of edges**']],
['Types of graph',['**Directed graph** – edges have arrows','**Weighted graph** – edges carry values (distance, cost, time)','**Simple graph** – no loops & no multiple edges','**Tree** – connected simple graph with no cycles; n vertices → **n − 1 edges**','**Subgraph**, **spanning tree**']],
['Applications',['**Shortest path** = smallest total weight','Minimum spanning tree = minimum total weight connecting all vertices']]],
q:[['A graph has 5 edges. The total degree of all vertices is',0,0],['A tree has 7 vertices. Its number of edges is',0,0],['In a weighted graph, the shortest path is the path that',['passes through the fewest vertices','has the smallest total weight','passes through the most edges','forms a cycle'],0],['The degree of a vertex is',['the number of vertices in the graph','the number of edges connected to that vertex','the total weight','the number of subgraphs'],0],['A directed graph can be recognised by',['weighted edges','coloured vertices','edges marked with arrows','having no cycles'],0],['A simple graph with 4 vertices where every vertex has degree 3 has how many edges',0,0]]},
{t:'Linear Inequalities in Two Variables',n:[
['Drawing regions',['Draw the boundary line first','**Dashed line** for > or <','**Solid line** for ≥ or ≤','Test a point (e.g. (0,0)) to decide which side to shade']],
['Tips',['y > mx + c → region **above** the line; y < mx + c → **below**','x > a → **right** of the line x = a; x < a → **left**','System of inequalities: the region that satisfies **all** of them (overlapping region)']]],
q:[['The line y = 2x + 1 is drawn dashed for the inequality',['y ≥ 2x + 1','y > 2x + 1','y ≤ 2x + 1','All of them'],0],['The region y < x is',['above the line y = x','below the line y = x','left of the y-axis','above the x-axis'],0],['The point that satisfies y ≥ x + 2 is',0,0],['The region x ≥ 0 is',['left of the y-axis','right of the y-axis including the y-axis','above the x-axis','below the x-axis'],0],['The solution region of a system of inequalities is',['the region of the first inequality only','the region satisfying all the inequalities','the union of all regions','the region outside all lines'],0],['The region y > 3 is',['above the horizontal line y = 3, dashed','below the line y = 3, solid','right of the line x = 3','above the line y = 3, solid'],0]]},
{t:'Motion Graphs',n:[
['Distance–time graph',['**Gradient = speed**','**Horizontal** line = object at rest','Negative gradient = moving back towards the start']],
['Speed–time graph',['**Gradient = acceleration** (negative = deceleration)','**Area under graph = distance**','Horizontal line = uniform speed']],
['Formulae',['Speed = distance ÷ time','Acceleration = (v − u) ÷ t','Average speed = total distance ÷ total time']]],
q:[['The gradient of a distance–time graph represents',['acceleration','speed','distance','time'],0],['A horizontal line on a distance–time graph shows the object is',['moving at uniform speed','accelerating','at rest','decelerating'],0],['The area under a speed–time graph represents',['acceleration','average speed','distance travelled','time'],0],['Speed rises from 0 to 12 m/s in 4 seconds. The acceleration is',0,0],['An object moves at 8 m/s for 5 s. The distance travelled is',0,0],['A negative gradient on a speed–time graph means the object is',['at rest','accelerating','decelerating','at uniform speed'],0]]},
{t:'Measures of Dispersion for Ungrouped Data',n:[
['Measures',['**Range** = largest − smallest','**Quartiles** Q₁, Q₂ (median), Q₃; **Interquartile range = Q₃ − Q₁**','**Variance σ² = Σ(x − mean)² ÷ N = Σx²/N − mean²**','**Standard deviation σ = √variance**']],
['Key rules',['Add/subtract a constant to all data → **SD & range unchanged**','Multiply all data by k → SD multiplied by |k|','All data the same → SD = 0','**Box plot**: min, Q₁, median, Q₃, max']],
['Use',['Small SD/IQR → more consistent data','IQR is not affected by extreme values (outliers)']]],
q:[['The range of 3, 7, 2, 9, 5 is',0,0],['The interquartile range of 1, 3, 5, 7, 9, 11, 13 is',0,0],['The standard deviation is',['the square of the variance','the square root of the variance','twice the variance','range ÷ 2'],0],['The standard deviation of 4, 4, 4, 4 is',0,0],['The variance of 2, 4, 6, 8, 10 is',0,0],['Every data value is increased by 5. The standard deviation',['increases by 5','decreases by 5','stays the same','becomes 5 times larger'],0]]},
{t:'Probability of Combined Events',n:[
['Types of events',['**Independent events** – one does not affect the other (with replacement)','**Mutually exclusive events** – cannot happen together, P(A ∩ B) = 0']],
['Rules',['**Independent**: P(A and B) = P(A) × P(B)','**Mutually exclusive**: P(A or B) = P(A) + P(B)','**General**: P(A ∪ B) = P(A) + P(B) − P(A ∩ B)','Without replacement → denominator decreases by 1 (dependent events)']],
['Tips',['Use a **tree diagram** or sample table','Probability is always between 0 and 1']]],
q:[['A coin and a die are tossed. P(head and 6) =',0,0],['A and B are mutually exclusive. P(A) = 0.3, P(B) = 0.5. P(A or B) =',0,0],['A and B are independent. P(A) = 0.4, P(B) = 0.5. P(A ∩ B) =',0,0],['A bag has 3 red and 2 blue balls. Two balls are taken WITH replacement. P(both red) =',0,0],['Same question WITHOUT replacement. P(both red) =',0,0],['P(A) = 0.6, P(B) = 0.5, P(A ∩ B) = 0.3. P(A ∪ B) =',0,0]]},
{t:'Consumer Mathematics: Financial Management',n:[
['Basics',['Income, savings, investment, expenses; **budget** = plan of income vs expenses','**Surplus** = income > expenses; **Deficit** = expenses > income; **Balanced** = equal']],
['Financial goals (SMART)',['**S**pecific, **M**easurable, **A**chievable, **R**ealistic, **T**ime-bound','Short / medium / long-term goals']],
['Wealth',['**Net worth = Assets − Liabilities**','Positive cash flow = inflow > outflow']],
['Steps',['Set goals → Assess financial position → Create a plan → Implement → Review & adjust']]],
q:[['Income is RM3 000 and expenses RM3 400. This budget has',['a surplus of RM400','a deficit of RM400','a surplus of RM3 400','a balance'],0],['Assets RM250 000 and liabilities RM90 000. The net worth is',0,0],['The letter "M" in SMART stands for',['Easy','Measurable','Minimum','Maximum'],0],['A budget surplus occurs when',['expenses > income','income > expenses','assets < liabilities','savings = 0'],0],['An example of a fixed expense is',['eating at restaurants','a housing loan instalment','buying clothes','gifts'],0],['Positive cash flow means',['cash out > cash in','cash in > cash out','no savings','cash in = 0'],0]]},
{t:'Variation',n:[
['Types of variation',['**Direct**: y ∝ x → **y = kx** (graph: straight line through the origin)','**Inverse**: y ∝ 1/x → **y = k/x**','**Joint**: y ∝ xz → y = kxz; y ∝ x/z → y = kx/z']],
['Solving steps',['1. Write the relationship with k','2. Find k using the given values','3. Use k to find the required value']],
['Other variations',['y ∝ x² → y = kx²','y ∝ 1/√x → y = k/√x']]],
q:[['y varies directly as x. y = 12 when x = 3. The value of y when x = 5 is',0,0],['y varies inversely as x. y = 6 when x = 4. The value of y when x = 8 is',0,0],['y ∝ x². y = 18 when x = 3. The value of y when x = 5 is',0,0],['y ∝ x/z. y = 4 when x = 8 and z = 2. The value of y when x = 9, z = 3 is',0,0],['The graph of direct variation y = kx is',['a downward curve','a straight line through the origin','a horizontal line','a hyperbola'],0],['p ∝ 1/q². p = 5 when q = 2. The value of p when q = 10 is',0,0]]},
{t:'Matrices',n:[
['Basics',['**Order** = number of rows × number of columns','Addition/subtraction: same order, operate on corresponding entries','Multiplication: (m×n)(n×p) → m×p; **row × column**; AB ≠ BA generally']],
['2×2 matrix (a b / c d)',['**Determinant** |A| = ad − bc','**Inverse** A⁻¹ = (1/(ad − bc)) (d −b / −c a)','If determinant = 0 → **singular** matrix, no inverse','AA⁻¹ = I (identity matrix)']],
['Simultaneous equations',['Write AX = B → **X = A⁻¹B**']]],
q:[['A matrix with 3 rows and 2 columns has order',0,0],['(1 2 / 3 4) + (0 1 / 2 −1) =',0,0],['The determinant of (2 3 / 1 4) is',0,0],['The inverse of (3 1 / 5 2) is',0,0],['(2 1) × (3 / 4) [row × column] =',0,0],['A matrix whose determinant is 0 is called',['identity','symmetric','singular (no inverse)','zero matrix'],0]]},
{t:'Consumer Mathematics: Insurance',n:[
['Terms',['**Premium** = regular payment to the insurer','**Deductible** = the initial amount borne by the policyholder','**Co-insurance** = sharing of loss between insurer and policyholder','**Principle of indemnity**: compensation up to the actual loss only, no profit']],
['Types',['**Life insurance** (term, whole life, endowment)','**General insurance**: motor, fire, health/medical']],
['Fire insurance (co-insurance clause)',['Compensation = (amount insured ÷ (co-insurance % × property value)) × loss — not more than the amount insured','_Check the exact formula in your textbook_']]],
q:[['The regular payment made to an insurance company is called',['deductible','premium','co-insurance','interest'],0],['The amount the policyholder pays first before compensation is called',['premium','benefit','deductible','charge'],0],['Loss RM12 000, deductible RM500 (full cover). The insurer pays',0,0],['The principle of indemnity means',['the policyholder can make a profit','compensation is limited to the actual loss','the premium is refunded','there is no deductible'],0],['Insurance that pays on death within a specified period is ___ life insurance',['term','endowment','whole life','general'],0],['Property worth RM400 000, co-insurance 80%, amount insured RM240 000, loss RM100 000. The compensation is',0,0]]},
{t:'Consumer Mathematics: Taxation',n:[
['Types of tax',['**Income tax** – on individual/company income','**Property tax** – assessment rate (cukai pintu), quit rent (cukai tanah)','**Sales & Service Tax (SST)** – sales tax on goods; service tax on services']],
['Calculation',['**Chargeable income = aggregate income − tax relief**','Income tax is computed from the **tax rate table** (progressive rates)','**Rebate/zakat** is deducted directly from the tax payable','Assessment tax = rate % × annual value of the property']],
['Authorities',['Income tax → LHDN (Inland Revenue Board); Assessment → Local Authority; Quit rent → state Land Office']]],
q:[['Assessment tax is collected by',['LHDN','the Local Authority','the Land Office','Customs'],0],['Aggregate income RM60 000, relief RM15 000. Chargeable income is',0,0],['Quit rent is paid to',['LHDN','the Local Authority','the state Land Office','Bank Negara'],0],['Zakat paid can be claimed as',['relief that adds to income','a rebate on income tax','extra tax','no effect'],0],['Annual value RM12 000, assessment rate 5%. The tax is',0,0],['The tax charged on manufactured goods is',['service tax','income tax','sales tax','quit rent'],0]]},
{t:'Congruency, Enlargement and Combined Transformations',n:[
['Congruency',['Same shape & size. Triangle tests: **SSS, SAS, ASA/AAS, RHS**','Isometries: **translation, reflection, rotation** (size unchanged)']],
['Enlargement',['Scale factor k: image = k × object from the centre','**Area ratio = k²**; length ratio = |k|','Negative k → image on the opposite side of the centre and inverted','**Image area = k² × object area**']],
['Combined transformations',['**VW** means transformation **W first, then V**','Combination of two isometries = an isometry','If there is an enlargement, it is not an isometry']]],
q:[['Which of the following is NOT an isometry?',['translation','rotation','reflection','enlargement with k = 3'],0],['Scale factor 3. The area ratio of image : object is',0,0],['Enlargement with k = −2 produces an image',['on the same side of the centre, 2× larger','on the opposite side of the centre, inverted, 2× larger','smaller, on the opposite side','of the same size'],0],['A triangle of area 10 cm² is enlarged with k = 3. The image area is',0,0],['Which of these is NOT a congruency test for triangles?',0,0],['The combination VW means',['V first, then W','W first, then V','simultaneously','V only'],0]]},
{t:'Ratios and Graphs of Trigonometric Functions',n:[
['Ratios',['sin θ = opp/hyp, cos θ = adj/hyp, tan θ = opp/adj','Special angles: sin30°=½, cos60°=½, tan45°=1, sin45°=cos45°=√2/2']],
['Angles 0°–360° (ASTC rule)',['Quadrant 1: all +; Quadrant 2: **sin** +; Quadrant 3: **tan** +; Quadrant 4: **cos** +','Reference angle α: sin(180−α)=sin α; cos(180−α)=−cos α; tan(180−α)=−tan α']],
['Graphs',['y = sin x & y = cos x: **amplitude 1, period 360°**; y = tan x: period 180°, no amplitude','y = a sin bx: amplitude |a|, period 360°/b']]],
q:[['sin 30° =',0,0],['tan 45° =',0,0],['cos 120° =',0,0],['In the third quadrant (180°–270°), the positive ratio is',['sin','cos','tan','all'],0],['The period of y = cos 2x is',0,0],['The maximum value of y = 3 sin x is',0,0]]},
{t:'Measures of Dispersion for Grouped Data',n:[
['Grouped data',['**Midpoint** of a class = (lower limit + upper limit) ÷ 2','**Upper boundary** of class 20–24 = 24.5; lower boundary = 19.5','Class size = upper boundary − lower boundary','**Mean = Σfx ÷ Σf**']],
['Ogive',['Plot **cumulative frequency** against **upper boundary**','**Median** at N/2; **Q₁** at N/4; **Q₃** at 3N/4','**IQR = Q₃ − Q₁**']],
['Histogram',['x-axis: class boundaries; y-axis: frequency','**Frequency polygon**: join the midpoints']]],
q:[['The midpoint of class 10–19 is',0,0],['An ogive is drawn by plotting cumulative frequency against',['midpoint','upper boundary','lower limit','lower boundary'],0],['The upper boundary of class 20–24 is',0,0],['The mean of grouped data is',0,0],['The median from an ogive is read at cumulative frequency',0,0],['The first quartile from an ogive is read at',0,0]]},
{t:'Mathematical Modelling',n:[
['Steps (SPM Paper 2 Section C)',['1. **Identify & define the problem**','2. **Make assumptions & identify variables**','3. **Apply mathematics to solve the problem**','4. **Verify & interpret the solution**','5. **Refine the mathematical model**','6. **Report the findings**']],
['Answer tips',['State your **assumptions** clearly','Show full working & **compare** options','Give a **conclusion** that answers the problem']]],
q:[['The first step in mathematical modelling is',['reporting the findings','identifying and defining the problem','refining the model','making assumptions'],0],['"Refining the model" is done after',['reporting the findings','verifying & interpreting the solution','defining the problem','making assumptions'],0],['In a modelling answer, "assumptions" are made to',['make the answer longer','simplify the real-world problem','change the question','avoid calculations'],0],['The last step of modelling is',['defining the problem','solving the problem','reporting the findings','making assumptions'],0],['Variables are identified at step',0,0],['Modelling questions usually appear in',['Paper 1','Paper 2 Section C','Paper 2 Section A','Paper 1 Section B'],0]]}
];
