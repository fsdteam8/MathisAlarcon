export function Section5() {
	return (
		<div className="w-full relative mt-26 px-16 sm:px-26">
			<h1 className="text-5xl font-bold text-center">
				<span>EYES PROD</span>
				<span className="title-outline">vintage</span>
			</h1>
			<p className="text-center text-outline text-md sm:text-3xl mt-8">
				À l’étage de la boutique se cache un univers à part : une
				collection 100% vintage, composée de montures originales jamais
				portées, soigneusement chinées au fil des années. Chaque pièce
				est unique, sélectionnée avec exigence parmi les plus belles
				créations d’époque, issues d’une collection personnelle rare et
				précieuse. cet espace est un véritable hommage au design
				lunetier, un aperçu d’une collection infinie où le temps semble
				suspendu. Un lieu pour les amateurs de caractère, de singularité
				et d’authenticité.
			</p>
			<div className="grid grid-cols-3 gap-4 sm:gap-8 mt-16">
				<img
					src="/img_s5_1.png"
					className="rounded-[110px] w-full aspect-square"
				/>
				<img
					src="/img_s5_2.png"
					className="rounded-[100px] w-full aspect-square"
				/>
				<img
					src="/img_s5_3.png"
					className="rounded-[100px] w-full aspect-square"
				/>
			</div>
		</div>
	);
}
