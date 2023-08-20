import Employees from "./employees.model";

const getAll = async () => {
  const result = await Employees.findAndCountAll();
  return {
    context: result.rows,
    total: result.count
  };
};

const getSingle = async (id) => {
  return Employees.findOne({ where: { id: id } })
};


const create = async (name) => {
  const employee = {
    name
  };
  return Employees.create(employee)
};

async function update(id, body) {

}
async function remove(id) {

}

export { getAll, create, update, remove, getSingle };
