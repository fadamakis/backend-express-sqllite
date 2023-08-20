import * as employeeService from "./employees.service";
import { Request, Response, NextFunction } from "express";

async function getSingle(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await employeeService.getSingle(req.params.id));
  } catch (err) {
    console.error(`Error while getting employee`, err.message);
    next(err);
  }
}

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await employeeService.create(req.body.name));
  } catch (err) {
    console.error(`Error while creating employee`, err.message);
    next(err);
  }
}

async function update(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await employeeService.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating employee`, err.message);
    next(err);
  }
}

async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await employeeService.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting employee`, err.message);
    next(err);
  }
}

async function getAll(_: Request, res: Response, next: NextFunction) {
  try {
    res.json(await employeeService.getAll());
  } catch (err) {
    console.error(`Error while getting employee`, err.message);
    next(err);
  }
}

export { getSingle, create, update, remove, getAll };
