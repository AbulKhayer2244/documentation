import{_ as n,c as s,o as a,a as t}from"./app.ef097145.js";const h='{"title":"Knex Query Builder","description":"","frontmatter":{},"headers":[{"level":2,"title":"Identifier Syntax","slug":"identifier-syntax"},{"level":2,"title":"Common","slug":"common"},{"level":3,"title":"knex","slug":"knex"},{"level":3,"title":"select","slug":"select"},{"level":3,"title":"as","slug":"as"},{"level":3,"title":"column","slug":"column"},{"level":3,"title":"from","slug":"from"},{"level":3,"title":"fromRaw","slug":"fromraw"},{"level":3,"title":"with","slug":"with"},{"level":3,"title":"withRecursive","slug":"withrecursive"},{"level":3,"title":"withMaterialized","slug":"withmaterialized"},{"level":3,"title":"withNotMaterialized","slug":"withnotmaterialized"},{"level":3,"title":"withSchema","slug":"withschema"},{"level":3,"title":"jsonExtract","slug":"jsonextract"},{"level":3,"title":"jsonSet","slug":"jsonset"},{"level":3,"title":"jsonInsert","slug":"jsoninsert"},{"level":3,"title":"jsonRemove","slug":"jsonremove"},{"level":3,"title":"offset","slug":"offset"},{"level":3,"title":"limit","slug":"limit"},{"level":3,"title":"union","slug":"union"},{"level":3,"title":"unionAll","slug":"unionall"},{"level":3,"title":"intersect","slug":"intersect"},{"level":3,"title":"except","slug":"except"},{"level":3,"title":"insert","slug":"insert"},{"level":3,"title":"onConflict","slug":"onconflict"},{"level":3,"title":"upsert","slug":"upsert"},{"level":3,"title":"update","slug":"update"},{"level":3,"title":"updateFrom","slug":"updatefrom"},{"level":3,"title":"del / delete","slug":"del-delete"},{"level":3,"title":"using","slug":"using"},{"level":3,"title":"returning","slug":"returning"},{"level":3,"title":"transacting","slug":"transacting"},{"level":3,"title":"skipLocked","slug":"skiplocked"},{"level":3,"title":"noWait","slug":"nowait"},{"level":3,"title":"count","slug":"count"},{"level":3,"title":"min","slug":"min"},{"level":3,"title":"max","slug":"max"},{"level":3,"title":"sum","slug":"sum"},{"level":3,"title":"avg","slug":"avg"},{"level":3,"title":"increment","slug":"increment"},{"level":3,"title":"decrement","slug":"decrement"},{"level":3,"title":"truncate","slug":"truncate"},{"level":3,"title":"pluck","slug":"pluck"},{"level":3,"title":"first","slug":"first"},{"level":3,"title":"hintComment","slug":"hintcomment"},{"level":3,"title":"comment","slug":"comment"},{"level":3,"title":"clone","slug":"clone"},{"level":3,"title":"denseRank","slug":"denserank"},{"level":3,"title":"rank","slug":"rank"},{"level":3,"title":"rowNumber","slug":"rownumber"},{"level":3,"title":"partitionBy","slug":"partitionby"},{"level":3,"title":"modify","slug":"modify"},{"level":3,"title":"columnInfo","slug":"columninfo"},{"level":3,"title":"debug","slug":"debug"},{"level":3,"title":"connection","slug":"connection"},{"level":3,"title":"options","slug":"options"},{"level":3,"title":"queryContext","slug":"querycontext"},{"level":2,"title":"Where Clauses","slug":"where-clauses"},{"level":3,"title":"where","slug":"where"},{"level":3,"title":"whereNot","slug":"wherenot"},{"level":3,"title":"whereIn","slug":"wherein"},{"level":3,"title":"whereNotIn","slug":"wherenotin"},{"level":3,"title":"whereNull","slug":"wherenull"},{"level":3,"title":"whereNotNull","slug":"wherenotnull"},{"level":3,"title":"whereExists","slug":"whereexists"},{"level":3,"title":"whereNotExists","slug":"wherenotexists"},{"level":3,"title":"whereBetween","slug":"wherebetween"},{"level":3,"title":"whereNotBetween","slug":"wherenotbetween"},{"level":3,"title":"whereRaw","slug":"whereraw"},{"level":3,"title":"whereLike","slug":"wherelike"},{"level":3,"title":"whereILike","slug":"whereilike"},{"level":3,"title":"whereJsonObject","slug":"wherejsonobject"},{"level":3,"title":"whereJsonPath","slug":"wherejsonpath"},{"level":3,"title":"whereJsonSupersetOf","slug":"wherejsonsupersetof"},{"level":3,"title":"whereJsonSubsetOf","slug":"wherejsonsubsetof"},{"level":2,"title":"Join Methods","slug":"join-methods"},{"level":3,"title":"join","slug":"join"},{"level":3,"title":"innerJoin","slug":"innerjoin"},{"level":3,"title":"leftJoin","slug":"leftjoin"},{"level":3,"title":"leftOuterJoin","slug":"leftouterjoin"},{"level":3,"title":"rightJoin","slug":"rightjoin"},{"level":3,"title":"rightOuterJoin","slug":"rightouterjoin"},{"level":3,"title":"fullOuterJoin","slug":"fullouterjoin"},{"level":3,"title":"crossJoin","slug":"crossjoin"},{"level":3,"title":"joinRaw","slug":"joinraw"},{"level":2,"title":"OnClauses","slug":"onclauses"},{"level":3,"title":"onIn","slug":"onin"},{"level":3,"title":"onNotIn","slug":"onnotin"},{"level":3,"title":"onNull","slug":"onnull"},{"level":3,"title":"onNotNull","slug":"onnotnull"},{"level":3,"title":"onExists","slug":"onexists"},{"level":3,"title":"onNotExists","slug":"onnotexists"},{"level":3,"title":"onBetween","slug":"onbetween"},{"level":3,"title":"onNotBetween","slug":"onnotbetween"},{"level":3,"title":"onJsonPathEquals","slug":"onjsonpathequals"},{"level":2,"title":"ClearClauses","slug":"clearclauses"},{"level":3,"title":"clear","slug":"clear"},{"level":3,"title":"clearSelect","slug":"clearselect"},{"level":3,"title":"clearWhere","slug":"clearwhere"},{"level":3,"title":"clearGroup","slug":"cleargroup"},{"level":3,"title":"clearOrder","slug":"clearorder"},{"level":3,"title":"clearHaving","slug":"clearhaving"},{"level":3,"title":"clearCounters","slug":"clearcounters"},{"level":3,"title":"distinct","slug":"distinct"},{"level":3,"title":"distinctOn","slug":"distincton"},{"level":3,"title":"groupBy","slug":"groupby"},{"level":3,"title":"groupByRaw","slug":"groupbyraw"},{"level":3,"title":"orderBy","slug":"orderby"},{"level":3,"title":"orderByRaw","slug":"orderbyraw"},{"level":2,"title":"Having Clauses","slug":"having-clauses"},{"level":3,"title":"having","slug":"having"},{"level":3,"title":"havingIn","slug":"havingin"},{"level":3,"title":"havingNotIn","slug":"havingnotin"},{"level":3,"title":"havingNull","slug":"havingnull"},{"level":3,"title":"havingNotNull","slug":"havingnotnull"},{"level":3,"title":"havingExists","slug":"havingexists"},{"level":3,"title":"havingNotExists","slug":"havingnotexists"},{"level":3,"title":"havingBetween","slug":"havingbetween"},{"level":3,"title":"havingNotBetween","slug":"havingnotbetween"},{"level":3,"title":"havingRaw","slug":"havingraw"}],"relativePath":"guide/query-builder.md"}',p={},o=t("",610),e=[o];function c(u,i,l,k,r,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{h as __pageData,f as default};
