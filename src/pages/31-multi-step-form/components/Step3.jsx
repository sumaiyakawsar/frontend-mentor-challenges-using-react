const addOnOptions = [
  { name: "Online service", description: "Access to multiplayer games", price: 1 },
  { name: "Larger storage", description: "Extra 1TB of cloud save", price: 2 },
  { name: "Customizable profile", description: "Custom theme on your profile", price: 2 },
];

const Step3 = ({formData, handleChange }) => {
  const billingType = formData.billing;

  const toggleAddon = (addon) => {
    const exists = formData.addons.find((a) => a.name === addon.name);

    let updatedAddons;
    if (exists) {
      // Remove addon
      updatedAddons = formData.addons.filter((a) => a.name !== addon.name);
    } else {
      // Add addon
      updatedAddons = [
        ...formData.addons,
        { name: addon.name, price: addon.price },
      ];
    }

    // Update formData
    handleChange({
      target: {
        name: 'addons',
        value: updatedAddons,
      },
    });
  };


  return (
    <div className="step step3">
      <div className="intro">
        <h1>Pick add-ons</h1>
        <p className="description">Add-ons help enhance your gaming experience.</p>
      </div>

      <div className="addons">
        {addOnOptions.map((addon) => (
          <label
            key={addon.name}
            htmlFor={addon.name}
            className={`addon ${formData.addons.some((a) => a.name === addon.name) ? 'selected' : ''}`}
          >
            <div className="addon__content">
              <input
                type="checkbox"
                id={addon.name}
                checked={formData.addons.some((a) => a.name === addon.name)}
                onChange={() => toggleAddon(addon)}
              />

              <div className="addon-info">
                <p className="addon_name">{addon.name}</p>
                <p className="addon_description">{addon.description}</p>
              </div>
            </div>


            <p className="price">
              +${billingType === "monthly" ? addon.price : addon.price * 10}/{billingType === 'monthly' ? 'mo' : 'yr'}
            </p>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Step3;
