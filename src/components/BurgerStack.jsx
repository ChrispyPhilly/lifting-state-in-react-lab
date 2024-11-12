const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <div>
      <h2>Your Burger Stack</h2>
      <ul>
        {stack.map((ingredient, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <span>
              {ingredient.name}
            </span>
            <button onClick={() => removeFromBurger(ingredient)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerStack;