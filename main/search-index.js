var searchIndex = new Map(JSON.parse('[\
["refuse",{"doc":"Refuse","t":"FKFKFTKYKFFKRKYFFFFNNCNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNHNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNMNNNNNNNNNNNNNMNNNHNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN","n":["AnyRef","Collectable","CollectionGuard","ContainsNoRefs","LocalPool","MAY_CONTAIN_REFERENCES","MapAs","MapAs","NoMapping","Ref","Root","SimpleType","Target","Trace","Trace","Tracer","WouldDeadlock","YieldComplete","Yielder","acquire","allocating_in","architecture","as_any","as_any","as_mut","as_ref","as_ref","as_ref","as_root","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","cast","cast","cast","cast","cast","cast","cast","cast","cast","cast_into","cast_into","cast_into","cast_into","cast_into","cast_into","cast_into","cast_into","cast_into","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","cmp","cmp","cmp","collect","collect","compare","compare","compare","coordinated_yield","default","deref","downcast_ref","downcast_root","downgrade","downgrade_any","drop","drop","drop","enter","eq","eq","eq","eq","eq","eq","eq","eq","eq","eq","eq","eq","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from","from","from","from","from","from_cast","from_cast","from_cast","from_cast","from_cast","from_cast","from_cast","from_cast","from_cast","hash","hash","hash","into","into","into","into","into","into","into","into","into","load","load","load_mapped","map_as","mark","new","new","partial_cmp","partial_cmp","partial_cmp","ptr_eq","root_count","to_owned","to_owned","to_owned","to_owned","to_string","trace","trace","trace","trace","try_collect","try_collect","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_while_unlocked","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","wait","while_unlocked","yield_to_collector"],"q":[[0,"refuse"],[196,"core::option"],[197,"intentional::cast"],[198,"core::cmp"],[199,"core::cmp"],[200,"core::cmp"],[201,"core::fmt"],[202,"core::hash"],[203,"core::convert"],[204,"core::convert"],[205,"core::result"],[206,"core::any"]],"d":["A type-erased garbage collected reference.","A type that can be garbage collected.","A guard that prevents garbage collection while held.","A type that can be garbage collected that cannot contain …","A pool of garbage collected values.","If true, this type may contain references and should have …","A mapping from one type to another.","","A type that implements <code>MapAs</code> with an empty implementation.","A reference to data stored in a garbage collector.","A root reference to a <code>T</code> that has been allocated in the …","A type that can contain no <code>Ref&lt;T&gt;</code>s and has an empty <code>MapAs</code> …","The target type of the mapping.","A type that can find and mark any references it has.","","A tracer for the garbage collector.","An error indicating an operation would deadlock.","A marker indicating that a coordinated yield has completed.","A pending yield to the garbage collector.","Acquires a lock that prevents the garbage collector from …","Returns a guard that allocates from <code>pool</code>.","Architecture overview of the underlying design of Refuse.","Returns this reference as an untyped reference.","Returns this reference as an untyped reference.","","","","","Loads a root reference to the underlying data. Returns <code>None</code>…","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Invokes the garbage collector.","Manually invokes the garbage collector.","","","","Perform a coordinated yield to the collector, if needed.","","","Returns a <code>Ref&lt;T&gt;</code>.","Returns a <code>Root&lt;T&gt;</code> if the underlying reference points to a <code>T</code>…","Returns a “weak” reference to this root.","Returns an untyped “weak” reference erased to this …","","","","Acquires a collection guard for this pool.","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","Returns the argument unchanged.","","","","","","","","","","","","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Loads a reference to the underlying data. Returns <code>None</code> if …","Loads a reference to the underlying data. Returns <code>None</code> if …","Returns a reference to the result of <code>MapAs::map_as()</code>, if …","Maps <code>self</code> to target type.","Marks <code>collectable</code> as being referenced, ensuring it is not …","Stores <code>value</code> in the garbage collector, returning a root …","Stores <code>value</code> in the garbage collector, returning a “weak…","","","","Returns true if these two references point to the same …","Returns the current number of root references to this …","","","","","","Traces all refrences that this value references.","","","","Invokes the garbage collector.","Manually invokes the garbage collector.","","","","","","","","","","","","","","","","","","","Executes <code>unlocked</code> while this guard is temporarily released.","","","","","","","","","","Waits for the garbage collector to finish the current …","Executes <code>unlocked</code> while this guard is temporarily released.","Yield to the garbage collector, if needed."],"i":[0,0,0,0,0,33,0,0,0,0,0,0,26,0,0,0,0,0,0,1,1,0,3,6,1,1,3,6,6,2,1,13,15,27,3,6,9,4,2,1,13,15,27,3,6,9,4,2,1,13,15,27,3,6,9,4,2,1,13,15,27,3,6,9,4,3,6,9,4,3,6,9,4,3,6,4,0,1,3,6,4,1,2,3,4,4,3,3,2,1,3,2,3,3,3,3,3,6,6,6,6,6,9,4,3,6,9,9,2,1,13,15,27,3,6,9,4,4,4,4,4,2,1,13,15,27,3,6,9,4,3,6,4,2,1,13,15,27,3,6,9,4,6,4,4,26,27,3,6,3,6,4,3,3,3,6,9,4,9,33,3,6,4,0,1,2,1,13,15,27,3,6,9,4,2,1,13,15,27,3,6,9,4,1,2,1,13,15,27,3,6,9,4,13,1,1],"f":"```````````````````{{}b}{{bd}b}`{{{f{c}}}hj}{{{l{c}}}hj}{bb}0{{{f{c}}}{{l{c}}}j}{{{l{c}}}{{l{c}}}{}}{{{l{c}}b}{{n{{f{c}}}}}j}{ce{}{}}00000000000000000{cg{}{}{{A`{e}}}}00000000111111111{{{f{c}}}{{f{c}}}j}4{AbAb}{hh}{{ce}Ad{}{}}000{{{f{c}}{f{c}}}Af{jAh}}{{{l{c}}{l{c}}}Af{}}{{hh}Af}{{}Ad}{bAd}{{ce}Af{}{}}00{{bc}Ad{{B`{Aj}{{Al{An}}}}}}{{}d}{{{f{c}}}ej{}}{h{{l{c}}}j}{{hb}{{n{{f{c}}}}}j}{{{f{c}}}{{l{c}}}j}{{{f{c}}}hj}{dAd}9{{{f{c}}}Adj}{db}{{{f{c}}{l{c}}}Bbj}{{{f{c}}{f{c}}}Bb{jBd}}{{{f{c}}h}Bbj}20{{{l{c}}h}Bbj}{{{l{c}}{f{c}}}Bbj}{{{l{c}}{l{c}}}Bb{}}12{{AbAb}Bb}{{hh}Bb}{{{f{c}}Bf}Bh{jBj}}{{{l{c}}Bf}Bh{jBj}}{{AbBf}Bh}0{cc{}}0000000{{{l{c}}}hj}1{hh}1{{{f{c}}}hj}333333333{{{f{c}}e}Ad{jBl}Bn}{{{l{c}}e}Ad{}Bn}{{hc}AdBn}{ce{}{}}00000000{{{l{c}}b}{{n{c}}}j}{{hb}{{n{c}}}j}{{hb}{{n{c}}}C`}{{{Cd{}{{Cb{c}}}}}cC`}{{Cfc}Ad{{Ch{h}}}}{{ce}{{f{c}}}j{{Cj{b}}}}{{ce}{{l{c}}}j{{Cj{b}}}}{{{f{c}}{f{c}}}{{n{Af}}}{jCl}}{{{l{c}}{l{c}}}{{n{Af}}}{}}{{hh}{{n{Af}}}}{{{f{c}}{f{c}}}Bbj}{{{f{c}}}Cnj}<<<<{cD`{}}{{DbCf}Ad}{{{f{c}}Cf}Adj}{{{l{c}}Cf}Adj}{{hCf}Ad}{{}{{Dd{AdAb}}}}{b{{Dd{AdAb}}}}{c{{Dd{e}}}{}{}}00000000000000000{{be}{{Dd{cAb}}}{}{{B`{}{{Al{c}}}}}}{cDf{}}00000000{AjAn}{{be}c{}{{B`{}{{Al{c}}}}}}{bAd}","c":[],"p":[[5,"CollectionGuard",0],[5,"LocalPool",0],[5,"Root",0],[5,"AnyRef",0],[10,"Collectable",0],[5,"Ref",0],[6,"Option",196],[10,"CastFrom",197],[5,"WouldDeadlock",0],[1,"unit"],[6,"Ordering",198],[10,"Ord",198],[5,"Yielder",0],[17,"Output"],[5,"YieldComplete",0],[10,"FnOnce",199],[1,"bool"],[10,"PartialEq",198],[5,"Formatter",200],[8,"Result",200],[10,"Debug",200],[10,"Hash",201],[10,"Hasher",201],[10,"Sized",202],[17,"Target"],[10,"MapAs",0],[5,"Tracer",0],[10,"Into",203],[10,"AsRef",203],[10,"PartialOrd",198],[1,"u64"],[5,"String",204],[10,"Trace",0],[6,"Result",205],[5,"TypeId",206]],"b":[[92,"impl-PartialEq%3C%26Ref%3CT%3E%3E-for-Root%3CT%3E"],[93,"impl-PartialEq-for-Root%3CT%3E"],[94,"impl-PartialEq%3CAnyRef%3E-for-Root%3CT%3E"],[95,"impl-PartialEq%3CRef%3CT%3E%3E-for-Root%3CT%3E"],[96,"impl-PartialEq%3C%26AnyRef%3E-for-Root%3CT%3E"],[97,"impl-PartialEq%3CAnyRef%3E-for-Ref%3CT%3E"],[98,"impl-PartialEq%3CRoot%3CT%3E%3E-for-Ref%3CT%3E"],[99,"impl-PartialEq-for-Ref%3CT%3E"],[100,"impl-PartialEq%3C%26Root%3CT%3E%3E-for-Ref%3CT%3E"],[101,"impl-PartialEq%3C%26AnyRef%3E-for-Ref%3CT%3E"],[106,"impl-Debug-for-WouldDeadlock"],[107,"impl-Display-for-WouldDeadlock"],[116,"impl-From%3C%26Ref%3CT%3E%3E-for-AnyRef"],[118,"impl-From%3C%26AnyRef%3E-for-AnyRef"],[119,"impl-From%3CRef%3CT%3E%3E-for-AnyRef"],[120,"impl-From%3C%26Root%3CT%3E%3E-for-AnyRef"]]}]\
]'));
if (typeof exports !== 'undefined') exports.searchIndex = searchIndex;
else if (window.initSearch) window.initSearch(searchIndex);
