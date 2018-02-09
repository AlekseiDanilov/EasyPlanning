package ru.naumen.easyplanning.model.service;

import java.io.Serializable;
import java.util.List;

public interface IDefaultService<Id, Entity extends Serializable> {
    List<Entity> list();

    Entity getById(Id id);

    void save(Entity entity);

    void update(Entity entity);

    void delete(Entity entity);
}
