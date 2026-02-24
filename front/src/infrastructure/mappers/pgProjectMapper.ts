import type { Content } from "@/src/domain/project/Content";
import type { Project } from "@/src/domain/project/Project";

export type ProjectRow = {
  id: number;
  title: string;
  type: string;
  contents: unknown;
  start: string;
  finish: string;
};

function toJsonObject(json: unknown): Record<string, unknown> | null {
  if (json !== null && typeof json === "object") {
    return json as Record<string, unknown>;
  }

  if (typeof json !== "string") {
    return null;
  }

  try {
    const parsed = JSON.parse(json) as unknown;
    if (parsed !== null && typeof parsed === "object") {
      return parsed as Record<string, unknown>;
    }
  } catch {
    return null;
  }

  return null;
}

export function jsonToContent(json: unknown): Content[] {
  const jsonObject = toJsonObject(json);
  if (!jsonObject) {
    return [];
  }

  const contentsRaw = jsonObject.contents;
  if (!Array.isArray(contentsRaw)) {
    return [];
  }

  return contentsRaw.reduce<Content[]>((acc, raw) => {
    if (raw === null || typeof raw !== "object") {
      return acc;
    }

    const item = raw as {
      order?: unknown;
      type?: unknown;
      imageUrl?: unknown;
      contentStr?: unknown;
    };

    if (
      typeof item.order !== "number" ||
      !Number.isFinite(item.order) ||
      typeof item.type !== "string"
    ) {
      return acc;
    }

    if (item.type === "img") {
      if (typeof item.imageUrl !== "string" || item.imageUrl.length === 0) {
        return acc;
      }

      acc.push({
        order: item.order,
        type: item.type,
        imageUrl: item.imageUrl,
      });
      return acc;
    }

    if (item.type === "str") {
      if (
        typeof item.contentStr !== "string" ||
        item.contentStr.length === 0
      ) {
        return acc;
      }

      acc.push({
        order: item.order,
        type: item.type,
        contentStr: item.contentStr,
      });
      return acc;
    }

    const content: Content = {
      order: item.order,
      type: item.type,
    };
    if (typeof item.imageUrl === "string") {
      content.imageUrl = item.imageUrl;
    }
    if (typeof item.contentStr === "string") {
      content.contentStr = item.contentStr;
    }

    acc.push(content);
    return acc;
  }, []);
}

export function mapProjectRowToProject(row: ProjectRow): Project {
  return {
    id: row.id,
    title: row.title,
    type: row.type,
    contents: jsonToContent(row.contents),
    start: typeof row.start === "string" ? row.start : "",
    finish: typeof row.finish === "string" ? row.finish : "",
  };
}
