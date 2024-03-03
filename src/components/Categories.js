import '../styles/Categories.css'

function Categories ({ setSelectedCategories, categories, selectedCategories }) {
    return (
        <div className='lmj-categories'>
			{/* <select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='lmj-categories-select'
			>
				<option value=''>---</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select> */}
			<h2>Categories</h2>
			{categories.map(cat => (
				<label key={cat}>
					<input
						type='checkbox'
						checked={selectedCategories.includes(cat)}
						onChange={() => setSelectedCategories(
							selectedCategories.includes(cat)
								? selectedCategories.filter(c => c !== cat)
								: selectedCategories.concat(cat)
						)}
					/>
					{cat}
				</label>
			))}
			<div className='lmj-categories-reset' >
				<button onClick={() => setSelectedCategories([])}>Réinitialiser</button>
			</div>
			
		</div>
	)
}

export default Categories