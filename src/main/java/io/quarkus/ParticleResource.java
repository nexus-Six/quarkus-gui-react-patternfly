package io.quarkus;

import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.Set;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("/particles")
public class ParticleResource {

    @GET
    public Set<Particle> getUsers() {
        
        Set <Particle> particleList = Collections.newSetFromMap(Collections.synchronizedMap(new LinkedHashMap<>()));

        Particle particle = new Particle();
        particle.setName("Graviton");
        particleList.add(particle);
        
        Particle particle2 = new Particle();
        particle2.setName("Pentaquark");
        particleList.add(particle2);        
        return particleList;
    }
}