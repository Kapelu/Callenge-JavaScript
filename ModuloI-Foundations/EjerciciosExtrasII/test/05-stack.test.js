const { efectoEspejo, turnos } = require("../05-Stack&queue/05-stack");



describe('efectoEspejo', function() {
    it('Debe devolver yoS yrneH cuando invoco efectoEspejo con Soy Henry', function() {
      expect(efectoEspejo('Cordoba Salta Tucuman Neuquen Jujuy')).toEqual('abodroC atlaS namucuT neuqueN yujuJ');
    });

    it('Debe devolver yoS yrneH cuando invoco efectoEspejo con Soy Henry', function() {
        expect(efectoEspejo('Mexico Chile Peru Colombia Bolivia')).toEqual('ocixeM elihC ureP aibmoloC aiviloB');
    });
});




  