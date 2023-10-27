class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <div class="card col-md-4 mt-5 mb-5" style="width: 20rem">
        <img src="${this.image}" class="card-img-top" alt="="${this.manufacture}" style="height: 200px; object-fit: cover;"/>
        <div class="card-body">
          <h3 style="font-size: 16px; font-weight: 500">${this.manufacture} / ${this.model}</h3>
          <h5
            class="card-title text-start"
            style="font-size: 18px; font-weight: 700"
          >
            Rp. ${this.rentPerDay} / Hari
          </h5>
          <p class="card-text text-start">
            ${this.description}
          </p>
          <div style="font-weight: 200">
            <p style="font-size: 18px">
              <i class="bi bi-people me-2" style="font-size: 20px"></i> ${this.capacity} Orang
            </p>
            <p style="font-size: 18px">
              <i class="bi bi-gear me-2" style="font-size: 20px"></i> ${this.transmission}
            </p>
            <p style="font-size: 18px">
              <i class="bi bi-calendar4 me-2" style="font-size: 20px"></i> Tahun ${this.year}
            </p>
          </div>

          <div class="text-center">
            <button
              type="button"
              class="btn register text-white rounded-1 mt-2"
              style="background-color: #5cb85f"
            >
              Mulai Sewa Mobil
            </button>
          </div>
        </div>
      </div>
    `;
  }
}
